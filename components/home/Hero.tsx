import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const titleSplit = new SplitText(titleRef.current, { type: "chars,words" });
    const descriptionSplit = new SplitText(descriptionRef.current, { type: "lines" });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out"
    });

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
    <section className="item-center ma-auto mt-16 mb-32 flex w-full flex-col justify-center text-center md:my-44 ">
      <div className="flex w-full justify-center">
        <h1
          ref={titleRef}
          className="pb-11 text-6xl font-extrabold tracking-tight transition-transform hover:scale-105 md:text-8xl"
        >
          Hello World.
          <br />
          Omomuro development.
        </h1>
      </div>
      <p ref={descriptionRef} className="flex w-full justify-center dark:text-slate-300">
        こんにちは！
        <br />
        おもむろに開発をします。
        <br />
      </p>
    </section>
  );
};

export default Hero;
