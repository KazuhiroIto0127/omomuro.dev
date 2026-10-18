import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/** クライアントでのみ true（SSR とハイドレーション中は false） */
export const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
