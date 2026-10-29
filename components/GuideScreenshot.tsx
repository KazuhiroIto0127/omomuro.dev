'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import type { Lang } from '@/lib/i18n';

export default function GuideScreenshot({ src, alt, lang }: { src: string; alt: string; lang: Lang }) {
  const english = lang === 'en';
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  const close = () => dialog.current?.close();
  return (
    <figure className="guide-figure">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-label={`${english ? 'Enlarge screenshot' : '画面を拡大'}: ${alt}`}
        className="focus-visible:outline-accent block w-full cursor-zoom-in rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
        onClick={() => {
          setZoomed(false);
          setOpen(true);
          dialog.current?.showModal();
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={660}
          height={1434}
          sizes="(min-width: 768px) 220px, 240px"
          className="app-icon h-auto w-full rounded-2xl"
        />
        <span className="text-accent mt-2 block text-xs underline underline-offset-4">
          {english ? 'Enlarge screenshot' : 'タップして拡大'}
        </span>
      </button>
      <figcaption>{alt}</figcaption>
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        className="guide-image-dialog not-prose"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="bg-card text-ink flex max-h-[90dvh] flex-col overflow-hidden rounded-2xl">
          <div className="border-line flex shrink-0 flex-wrap items-center justify-between gap-2 border-b p-3">
            <p id={titleId} className="font-maru text-sm font-bold">
              {english ? 'Screenshot' : '操作画面'}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="border-line min-h-11 rounded-full border px-4 text-sm"
                aria-pressed={zoomed}
                onClick={() => setZoomed(!zoomed)}
              >
                {zoomed ? (english ? 'Fit width' : '幅に合わせる') : english ? 'Zoom in' : 'さらに拡大'}
              </button>
              <button type="button" className="bg-ink text-paper min-h-11 rounded-full px-4 text-sm" onClick={close}>
                {english ? 'Close' : '閉じる'}
              </button>
            </div>
          </div>
          <div
            className="min-h-0 overflow-auto overscroll-contain p-4"
            tabIndex={0}
            aria-label={english ? 'Scrollable screenshot' : 'スクロールできる拡大画像'}
          >
            {open && (
              <Image
                src={src}
                alt={alt}
                width={660}
                height={1434}
                sizes="660px"
                className={zoomed ? 'h-auto w-[660px] max-w-none' : 'mx-auto h-auto w-full max-w-[660px]'}
              />
            )}
            <p className="text-sub mt-4 text-sm leading-7">{alt}</p>
          </div>
        </div>
      </dialog>
    </figure>
  );
}
