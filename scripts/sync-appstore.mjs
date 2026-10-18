#!/usr/bin/env node
/**
 * App Store に公開中のアイコンとスクリーンショットを取り込む。
 *
 *   npm run sync:appstore            # 全アプリ
 *   npm run sync:appstore -- kakusu  # 指定したアプリだけ
 *
 * - アプリの一覧（slug・App Store ID・スクリーンショット枚数）は lib/apps.ts から読む
 * - アイコン: public/images/apps/<slug>.png（512px）
 * - スクリーンショット: public/images/apps/screens/<slug>/{ja,en}/<n>.jpg（iPhone 用、横 600px）
 *   日本語は日本の App Store、英語は米国の App Store から取得する
 * - 中身が変わったファイルだけ書き換え、結果を一覧で表示する
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

const parseApps = (source) => {
  const blocks = source.split(/\n  \{\n    slug: '/).slice(1);
  return blocks.map((block) => {
    const slug = block.slice(0, block.indexOf("'"));
    const id = block.match(/apps\.apple\.com\/[a-z/]*id(\d+)/)?.[1];
    const screenshotCount = Number(block.match(/screenshotCount: (\d+)/)?.[1] ?? 0);
    return { slug, id, screenshotCount };
  });
};

const lookup = async (id, country) => {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=${country}&entity=software`);
  if (!res.ok) throw new Error(`lookup ${id} (${country}): HTTP ${res.status}`);
  const app = (await res.json()).results?.[0];
  if (!app) throw new Error(`lookup ${id} (${country}): not found`);
  return app;
};

const download = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
};

/** 書き込み先と中身が同じなら書き換えない */
const save = async (file, data) => {
  const existing = await readFile(file).catch(() => null);
  if (existing && existing.equals(data)) return 'same';
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
  return existing ? 'updated' : 'added';
};

const resize = (artworkUrl, spec) => artworkUrl.replace(/\/[^/]+$/, `/${spec}`);

const main = async () => {
  const only = new Set(process.argv.slice(2));
  const apps = parseApps(await readFile(path.join(root, 'lib/apps.ts'), 'utf8')).filter(
    (app) => only.size === 0 || only.has(app.slug),
  );
  if (apps.length === 0) throw new Error('対象のアプリが見つかりません');

  const results = [];
  for (const app of apps) {
    if (!app.id) {
      results.push([app.slug, 'skip', 'App Store URL がありません']);
      continue;
    }
    const jp = await lookup(app.id, 'jp');
    const icon = await download(resize(jp.artworkUrl512, '512x512bb.png'));
    results.push([app.slug, await save(path.join(root, `public/images/apps/${app.slug}.png`), icon), 'icon']);

    for (const [country, lang] of [
      ['jp', 'ja'],
      ['us', 'en'],
    ]) {
      const info = country === 'jp' ? jp : await lookup(app.id, country);
      const shots = (info.screenshotUrls ?? []).slice(0, app.screenshotCount);
      if (shots.length < app.screenshotCount) {
        results.push([app.slug, 'warn', `${lang}: スクリーンショットが ${shots.length} 枚しかありません`]);
      }
      for (const [i, url] of shots.entries()) {
        const file = path.join(root, `public/images/apps/screens/${app.slug}/${lang}/${i + 1}.jpg`);
        results.push([app.slug, await save(file, await download(resize(url, '600x0w.jpg'))), `${lang}/${i + 1}.jpg`]);
      }
    }
  }

  for (const [slug, status, what] of results) console.log(`${status.padEnd(8)} ${slug.padEnd(18)} ${what}`);
  const changed = results.filter(([, status]) => status === 'updated' || status === 'added').length;
  console.log(changed ? `\n${changed} 件のファイルを更新しました。` : '\n変更はありません。');
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
