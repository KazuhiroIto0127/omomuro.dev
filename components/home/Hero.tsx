import React, { useRef } from 'react';
import Image from 'next/image';
import { Sigmar } from 'next/font/google';
import styles from '@/styles/HeroOutline.module.css';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';

const sigmar = Sigmar({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const waveRef = useRef<HTMLSpanElement>(null);

  useHeroAnimation(titleRef, waveRef);

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
            <span className="text-3xl md:text-6xl lg:text-7xl">software engineer.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
