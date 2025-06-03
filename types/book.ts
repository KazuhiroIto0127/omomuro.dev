export type Book = {
  id: string;
  title: string;
  cover: string;
  addedDate?: string;     // 追加日（読み始めた日）
  completedDate?: string; // 読了日
  slug: string;
  body: string;
  author?: string;
  status?: string;
};
