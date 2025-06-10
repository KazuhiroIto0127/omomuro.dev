import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useViewTransition = () => {
  const router = useRouter();

  // ブラウザバック/進むでのview transition対応
  useEffect(() => {
    if ('startViewTransition' in document) {
      router.beforePopState(({ url, as, options }) => {
        // View transitionを開始して、その中でナビゲーションを実行
        // @ts-ignore — startViewTransition is still experimental
        document.startViewTransition(async () => {
          await router.push(url, as, options);
        });
        return false; // デフォルトのナビゲーションを防ぐ
      });
    }

    return () => {
      // クリーンアップ: デフォルトの動作に戻す
      router.beforePopState(() => true);
    };
  }, [router]);

  // View Transition対応のナビゲーション関数
  const navigateWithTransition = async (url: string, e?: React.MouseEvent) => {
    // View Transition APIが利用可能かチェック
    if ('startViewTransition' in document) {
      e?.preventDefault();

      try {
        // @ts-ignore — startViewTransition is still experimental
        document.startViewTransition(async () => {
          await router.push(url);
        });
      } catch (error) {
        // エラーが発生した場合は通常のナビゲーション
        await router.push(url);
      }
    } else {
      // View Transition APIが利用できない場合は通常のナビゲーション
      await router.push(url);
    }
  };

  return { navigateWithTransition };
};