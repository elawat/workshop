import { DictionaryItem } from 'src/app/core/base-models/dictionary.model';

export type Book = {
  id: number;
  title: string;
  subtitle: string | null;
  originallyPublishedYear: number;
  genreIds: number[];
  seriesTitle: string | null;
  pageCount: number;
  tagsIds: number[];
  description: string;
  authorId: number;
};

export type BookDictionaries = {
  genres: DictionaryItem[];
  tags: DictionaryItem[];
};
