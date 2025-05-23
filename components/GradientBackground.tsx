import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface Ellipse {
  mesh: THREE.Mesh;
  speed: {
    x: number;
    y: number;
    rotation: number;
  };
  position: {
    x: number;
    y: number;
  };
  scale: number;
}

const GradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const ellipsesRef = useRef<Ellipse[]>([]);

  // ランダムな色を生成する関数
  const generateRandomColor = (isDark: boolean) => {
    const colors = isDark
      ? [
          [0.2, 0.4, 0.8], // 暗い青
          [0.6, 0.2, 0.8], // 暗い紫
          [0.2, 0.6, 0.4], // 暗い緑
          [0.8, 0.3, 0.2], // 暗い赤
        ]
      : [
          [0.5, 0.8, 1.0], // 水色
          [0.8, 0.5, 1.0], // 紫色
          [0.4, 0.8, 0.6], // 緑色
          [1.0, 0.6, 0.4], // オレンジ
        ];

    const color = colors[Math.floor(Math.random() * colors.length)];
    return new THREE.Vector3(...color);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // シーンの設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 楕円の数
    const numEllipses = 5;

    // 楕円の生成
    for (let i = 0; i < numEllipses; i++) {
      const geometry = new THREE.IcosahedronGeometry(1, 4);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: generateRandomColor(theme === 'dark') },
          color2: { value: generateRandomColor(theme === 'dark') },
        },
        vertexShader: `
            uniform float time;
            varying vec2 vUv;
            void main() {
              vUv = uv;
              vec3 pos = position;

              // simple trig-based "noise" to create a fluid, blobby deformation
              float noise = sin(pos.x * 3.0 + time) *
                            sin(pos.y * 3.0 + time * 0.7) *
                            sin(pos.z * 3.0 + time * 1.3);

              pos += normal * noise * 0.3;  // push vertices along normals

              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;

          // simple hash‑based noise for grain
          float random(vec2 st) {
            return fract(sin(dot(st.xy ,vec2(12.9898,78.233))) * 43758.5453);
          }

          void main() {
            vec2 uv = vUv;

            // radial (center‑out) gradient factor
            float g = length(uv - vec2(0.5)) * 2.0;
            g = clamp(g, 0.0, 1.0);

            // smooth colour gradient
            vec3 baseColor = mix(color1, color2, g);

            // animated grain
            float grain = random(gl_FragCoord.xy + vec2(time)) - 0.5;
            baseColor += grain * 0.15;  // adjust intensity for "ざらっと" feel

            // soft elliptical alpha mask
            float x = uv.x * 2.0 - 1.0;
            float y = uv.y * 2.0 - 1.0;
            float ellipse = 1.0 - (x * x + y * y * 0.5);
            float alpha = smoothstep(0.0, 0.1, ellipse);

            gl_FragColor = vec4(baseColor, alpha * 0.4);
          }
        `,
        transparent: true,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // ランダムな初期位置と速度を設定
      const scale = 0.5 + Math.random() * 1.5;
      mesh.scale.set(scale, scale, scale);

      const ellipse: Ellipse = {
        mesh,
        speed: {
          x: (Math.random() - 0.5) * 0.001,
          y: (Math.random() - 0.5) * 0.001,
          rotation: (Math.random() - 0.5) * 0.001,
        },
        position: {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4,
        },
        scale,
      };

      mesh.position.set(ellipse.position.x, ellipse.position.y, 0);
      scene.add(mesh);
      ellipsesRef.current.push(ellipse);
    }

    camera.position.z = 5;

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      // 各楕円の位置と回転を更新
      ellipsesRef.current.forEach((ellipse) => {
        // 位置の更新
        ellipse.position.x += ellipse.speed.x;
        ellipse.position.y += ellipse.speed.y;

        // 画面端での跳ね返り
        if (Math.abs(ellipse.position.x) > 2) {
          ellipse.speed.x *= -1;
        }
        if (Math.abs(ellipse.position.y) > 2) {
          ellipse.speed.y *= -1;
        }

        // メッシュの更新
        ellipse.mesh.position.set(ellipse.position.x, ellipse.position.y, 0);
        ellipse.mesh.rotation.x += ellipse.speed.rotation;
        ellipse.mesh.rotation.y += ellipse.speed.rotation;

        // 時間の更新
        const material = ellipse.mesh.material as THREE.ShaderMaterial;
        material.uniforms.time.value += 0.004;
      });

      renderer.render(scene, camera);
    };

    animate();

    // リサイズハンドラ
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      ellipsesRef.current.forEach((ellipse) => {
        ellipse.mesh.geometry.dispose();
        (ellipse.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default GradientBackground;
