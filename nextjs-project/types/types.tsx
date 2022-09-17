export interface NewsListItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface NewsItem extends NewsListItem {
  content: string;
  comments: NewsItem[];
}

export interface TodoList {
  isChecked: boolean;
  key: number;
  item: string;
}
export interface Adding {
  name: string;
  orName: string;
  picture: string;
  discription: string;
  rating: string;
}

export interface Titles extends Adding {
  id: number;
}
