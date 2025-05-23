import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { Sigmar } from 'next/font/google';
import styles from '@/styles/HeroOutline.module.css';

const sigmar = Sigmar({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const waveRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    // デバッグ用のログ
    console.log('waveRef:', waveRef.current);

    const titleSplit = new SplitText(titleRef.current, { type: "chars,words" });
    // Apply gradient classes to each character span created by SplitText
    titleSplit.chars.forEach((char: HTMLElement) => {
      // Small bottom padding so descenders (e.g., "p", "g") aren't clipped
      char.style.paddingBottom = '0.2em';
    });
    // Reveal the title only after SplitText has done its work to avoid flash of unstyled text
    gsap.set(titleRef.current, { autoAlpha: 1 });
    const descriptionSplit = new SplitText(descriptionRef.current, { type: "lines" });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out"
    });

    // 揺らすアニメーションを👋に適用
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        rotation: 20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.5,
        transformOrigin: "center center"
      });
    }

    gsap.from(descriptionSplit.lines, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5
    });
  }, []);

  return (
    <section className="item-center ma-auto mt-8 mb-16 flex w-full flex-col justify-center md:my-32">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <h1
            ref={titleRef}
            className={`${sigmar.className} ${styles.outlineText} opacity-0 pb-11 text-4xl font-extrabold tracking-tight transition-transform hover:scale-105 md:text-7xl lg:text-8xl`}
          >
            Hi!<span ref={waveRef} className="inline-block">👋</span>
            <br />
            <span>I&apos;m Kazuhiro Ito,</span>
            <br />
            <p>software engineer.</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
