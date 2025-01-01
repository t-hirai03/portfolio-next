// 個別のプロジェクトデータ型
export type Project = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  technology: string;
  url: string;
};

// レスポンス全体の型
export type ProjectsResponse = {
  contents: Project[];
  totalCount: number;
  offset: number;
  limit: number;
};
