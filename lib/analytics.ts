/** Keep existing children's app exclusions consistent across pageviews and clicks. */
export const isAnalyticsExcluded = (path: string) => path.split('?')[0].startsWith('/works/little-playground/');

export type StorePlacement = 'app_hero' | 'app_footer' | 'guide_intro' | 'guide_footer';

export function appStoreEvent(app: string, placement: StorePlacement, language: 'ja' | 'en', pagePath: string) {
  const path = pagePath.split(/[?#]/)[0];
  if (isAnalyticsExcluded(path)) return null;
  return { app_slug: app, placement, language, page_path: path };
}
