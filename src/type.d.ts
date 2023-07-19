export type BlogType = {
  source: {
    id?: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface TotalArticle {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: any;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: string;
  content: string;
}

export interface Source {}
