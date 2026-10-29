import test from 'node:test';
import assert from 'node:assert/strict';
import { appStoreEvent } from '../lib/analytics.ts';

test('store clicks distinguish app, article, locale and button position without URL queries', () => {
  assert.deepEqual(
    appStoreEvent('kakusu', 'guide_intro', 'en', '/guides/blur-faces-in-videos-iphone/en?email=private#step'),
    {
      app_slug: 'kakusu',
      placement: 'guide_intro',
      language: 'en',
      page_path: '/guides/blur-faces-in-videos-iphone/en',
    },
  );
});

test('existing private app routes never emit store click events, including English routes', () => {
  for (const path of [
    '/works/little-playground/support',
    '/works/little-playground/privacy',
    '/works/little-playground/en',
    '/works/little-playground/en/privacy',
  ]) {
    assert.equal(appStoreEvent('little-playground', 'app_footer', 'ja', path), null);
  }
});
