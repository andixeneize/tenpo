export interface User {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}

export interface Book {
  key: string; // ej: "/works/OL1257866W"
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  language?: string[];
  edition_count?: number;
  has_fulltext?: boolean;
  ebook_access?: string;
  public_scan_b?: boolean;
}
