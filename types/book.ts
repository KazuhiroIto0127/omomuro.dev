import { ContentWithBody } from '@/lib/contentLoader';

export interface Book extends ContentWithBody {
  id: string;
  title: string;
  cover: string;
  addedDate?: string;     // 追加日（読み始めた日）
  completedDate?: string; // 読了日
  author?: string;
  status?: string;
}
