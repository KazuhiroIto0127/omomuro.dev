import React from 'react';

/**
 * ヒーローセクションコンポーネント
 * 各ページの上部に表示される大きなタイトルセクション
 */
interface HeroSectionProps {
  /** ページのメインタイトル */
  title: string;
  /** タイトルの後に表示する絵文字（オプション） */
  emoji?: string;
  /** タイトルの下に表示する説明文 */
  description: string;
  /** 背景のグラデーションクラス（Tailwind CSS形式） */
  backgroundGradient?: string;
  /** 装飾的な円形要素を表示するかどうか */
  decorativeElements?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  emoji,
  description,
  backgroundGradient = 'from-indigo-600 via-purple-600 to-pink-600',
  decorativeElements = true,
}) => {
  return (
    <div className={`relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br ${backgroundGradient} p-8 text-white`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {title}
          {emoji && <span className="ml-2 text-2xl">{emoji}</span>}
        </h1>
        <p className="text-lg opacity-90 md:text-xl">
          {description}
        </p>
      </div>

      {decorativeElements && (
        <>
          {/* 装飾的な要素 */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5"></div>
          <div className="absolute right-20 top-20 h-16 w-16 rounded-full bg-white/10"></div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
