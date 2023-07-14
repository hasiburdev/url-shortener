export interface ShortLink {
  url: string;
  visits: number;
  shortId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShortLinks {
  [key: string]: ShortLink;
}
