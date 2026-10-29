import type { ReactNode } from 'react';
import Image from 'next/image';
import type { Components } from 'react-markdown';
import clsx from 'clsx';

/** 本文に載せるスクリーンショットの種類と、書き出したときのピクセル数 */
const kinds = {
  phone: { width: 660, height: 1434, className: 'max-w-[280px] min-w-0 flex-1 rounded-[28px]' },
  ipad: { width: 1032, height: 1376, className: 'w-full max-w-[440px] rounded-[1.25rem]' },
  duo: { width: 1200, height: 844, className: 'w-full rounded-[1.25rem]' },
} as const;

export type ShotKind = keyof typeof kinds;

const isShotKind = (value: unknown): value is ShotKind => typeof value === 'string' && value in kinds;

/** アプリ紹介ページ本文のスクリーンショット 1 枚 */
export function Shot({ src, alt, kind = 'phone' }: { src: string; alt: string; kind?: ShotKind }) {
  const { width, height, className } = kinds[kind];
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={kind === 'phone' ? '280px' : '(min-width: 768px) 680px, 100vw'}
      // 白い画面がカードに溶けないように、アイコンと同じ薄い枠を付ける
      className={clsx('app-icon m-0 h-auto', className)}
    />
  );
}

/** スクリーンショットを横に並べる（iPhone は 2 枚まで並ぶ） */
export function Shots({ children }: { children: ReactNode }) {
  return <div className="not-prose my-8 flex items-start justify-center gap-4">{children}</div>;
}

type MdNode = { type: string; tagName?: string; value?: string };

/**
 * Markdown 本文で画像だけの段落をスクリーンショットの並びにする。
 * `![説明](/images/... "phone")` のように title で種類（phone・ipad・duo）を指定する。
 */
export const shotComponents: Components = {
  p: ({ node, children }) => {
    const kids = (node?.children ?? []) as MdNode[];
    const onlyImages =
      kids.some((c) => c.tagName === 'img') &&
      kids.every((c) => c.tagName === 'img' || (c.type === 'text' && !c.value?.trim()));
    return onlyImages ? <Shots>{children}</Shots> : <p>{children}</p>;
  },
  img: ({ src, alt, title }) => <Shot src={String(src)} alt={alt ?? ''} kind={isShotKind(title) ? title : 'phone'} />,
};
