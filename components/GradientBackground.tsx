import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const GradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // シーンの設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 楕円形のジオメトリを作成
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        isDark: { value: theme === 'dark' ? 1.0 : 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float isDark;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float x = uv.x * 2.0 - 1.0;
          float y = uv.y * 2.0 - 1.0;

          // ライトテーマ用の色
          vec3 lightColor1 = vec3(0.5, 0.8, 1.0); // 水色
          vec3 lightColor2 = vec3(0.8, 0.5, 1.0); // 紫色

          // ダークテーマ用の色
          vec3 darkColor1 = vec3(0.2, 0.4, 0.8); // 暗い青
          vec3 darkColor2 = vec3(0.6, 0.2, 0.8); // 暗い紫

          // テーマに応じて色を選択
          vec3 color1 = mix(lightColor1, darkColor1, isDark);
          vec3 color2 = mix(lightColor2, darkColor2, isDark);

          // 時間に基づいて色を変化
          float t = sin(time * 0.5) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, t);

          // 楕円形の形状を作成
          float ellipse = 1.0 - (x * x + y * y * 0.5);
          float alpha = smoothstep(0.0, 0.1, ellipse);

          // ダークテーマの場合は透明度を少し上げる
          float finalAlpha = mix(alpha * 0.5, alpha * 0.7, isDark);

          gl_FragColor = vec4(color, finalAlpha);
        }
      `,
      transparent: true,
    });

    materialRef.current = material;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 2;

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      // メッシュを回転
      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.002;

      // 時間を更新
      material.uniforms.time.value += 0.01;

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
      geometry.dispose();
      material.dispose();
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
