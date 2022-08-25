export interface ListInterface {
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

export interface NewInterface {
  id: number;
  title: string;
  points: number | null;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  content: string;
  type: string;
  comments: NewInterface[];
  url?: string;
}
