export interface Book {
  id: string;
  title: string;
  authors: string[];
  coverUrl: string;
  publishYear?: number;
  firstSentence?: string;
  publishers?: string[];
  subjects?: string[];
  numberOfPages?: number;
}