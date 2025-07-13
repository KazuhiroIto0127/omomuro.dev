import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

type MediaData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'image' | 'video' | 'graphic';
  poster?: string;
  category?: string;
  description?: string;
};

export async function getGalleryImages(): Promise<MediaData[]> {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');
  const metadataPath = path.join(galleryPath, 'metadata.json');

  // メタデータファイルを読み込み
  let metadata: { [key: string]: any } = {};
  if (fs.existsSync(metadataPath)) {
    const metadataContent = fs.readFileSync(metadataPath, 'utf8');
    metadata = JSON.parse(metadataContent);
  }

  const files = fs.readdirSync(galleryPath);

  // 画像・動画ファイルのみをフィルタリング（metadata.jsonを除外）
  const mediaFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp|mp4)$/i.test(file) && file !== 'metadata.json'
  );

  // メディアデータを設定
  const imagesWithStats = await Promise.all(
    mediaFiles.map(async file => {
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      const ext = path.extname(file).toLowerCase();

      // メタデータからタイプを取得、なければデフォルト
      const fileMetadata = metadata[file] || {};
      let type = fileMetadata.type;

      if (!type) {
        // メタデータがない場合は拡張子で判定
        if (ext === '.mp4' || ext === '.gif') {
          type = 'video';
        } else {
          type = 'image';
        }
      }

      if (ext === '.mp4') {
        // 動画の場合
        // サムネイル画像（同名jpg/png/webp優先）を探す
        const base = path.basename(file, ext);
        const posterExts = ['.png', '.jpg', '.jpeg', '.webp'];
        let poster = undefined;

        // 大文字小文字を考慮してサムネイルを検索
        for (const pExt of posterExts) {
          // 小文字で検索
          let posterPath = path.join(galleryPath, base + pExt);
          if (fs.existsSync(posterPath)) {
            poster = `/images/gallery/${base + pExt}`;
            break;
          }
          // 大文字で検索
          posterPath = path.join(galleryPath, base + pExt.toUpperCase());
          if (fs.existsSync(posterPath)) {
            poster = `/images/gallery/${base + pExt.toUpperCase()}`;
            break;
          }
        }

        return {
          src: `/images/gallery/${file}`,
          alt: fileMetadata.description || path.parse(file).name,
          width: 640,
          height: 360,
          type: type,
          poster,
          ...(fileMetadata.category && { category: fileMetadata.category }),
          ...(fileMetadata.description && { description: fileMetadata.description }),
          createdAt: stats.birthtime || stats.mtime,
        };
      } else {
        // 画像の場合
        const imageMetadata = await sharp(filePath).metadata();
        return {
          src: `/images/gallery/${file}`,
          alt: fileMetadata.description || path.parse(file).name,
          width: imageMetadata.width || 0,
          height: imageMetadata.height || 0,
          type: type,
          ...(fileMetadata.category && { category: fileMetadata.category }),
          ...(fileMetadata.description && { description: fileMetadata.description }),
          createdAt: stats.birthtime || stats.mtime,
        };
      }
    })
  );

  // ファイル名ベースでソート（降順）- Vercelでも確実に動作
  const images = imagesWithStats
    .sort((a, b) => {
      const fileNameA = path.basename(a.src);
      const fileNameB = path.basename(b.src);

      // ファイル名に日付が含まれている場合の処理（YYYY-MM-DD形式）
      const dateRegex = /(\d{4}-\d{2}-\d{2})/;
      const dateA = fileNameA.match(dateRegex)?.[1];
      const dateB = fileNameB.match(dateRegex)?.[1];

      if (dateA && dateB) {
        return dateB.localeCompare(dateA); // 日付で降順ソート
      }

      // 日付が含まれていない場合はファイル名で降順ソート
      return fileNameB.localeCompare(fileNameA);
    })
    .map(({ createdAt, ...image }) => image); // createdAtを除外してpropsに渡す

  return images;
}