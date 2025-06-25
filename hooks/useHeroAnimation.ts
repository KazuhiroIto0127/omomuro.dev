
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { RefObject } from 'react';

gsap.registerPlugin(SplitText);

export const useHeroAnimation = (
  titleRef: RefObject<HTMLHeadingElement>,
  waveRef: RefObject<HTMLSpanElement>
) => {
  useGSAP(
    () => {
      if (!titleRef.current || !waveRef.current) return;

      const titleSplit = new SplitText(titleRef.current, { type: 'chars,words' });
      titleSplit.chars.forEach((char: HTMLElement) => {
        char.style.paddingBottom = '0.2em';
      });
      gsap.set(titleRef.current, { autoAlpha: 1 });

      gsap.from(titleSplit.chars, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power4.out',
      });

      gsap.to(waveRef.current, {
        rotation: 20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1.5,
        transformOrigin: 'center center',
      });
    },
    { scope: titleRef }
  );
};
