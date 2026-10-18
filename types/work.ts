import { ContentWithBody } from '@/lib/contentLoader';

export interface Work extends ContentWithBody {
  title: string;
  description: string;
  thumbnail: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  thumbnailFileName: string;
  createdAt: string;
  url?: string;
  /** 検索結果用（未指定なら title） */
  seoTitle?: string;
  /** 検索結果用（未指定なら description） */
  seoDescription?: string;
}
