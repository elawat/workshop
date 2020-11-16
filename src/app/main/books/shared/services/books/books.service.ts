import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book, BookDictionaries } from '../../models/book.model';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    subtitle: '',
    originallyPublishedYear: 1925,
    genreIds: [1],
    seriesTitle: null,
    pageCount: 218,
    tagsIds: [1, 5],
    description:
      'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.',
    authorId: 1,
  },
  {
    id: 2,
    title: 'Great Expectations',
    subtitle: '',
    originallyPublishedYear: 1860,
    genreIds: [1],
    seriesTitle: null,
    pageCount: 432,
    tagsIds: [1],
    description:
      'Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel, which depicts the education of an orphan nicknamed Pi',
    authorId: 2,
  },
  {
    id: 3,
    title: 'One Hundred Years of Solitude',
    subtitle: '',
    originallyPublishedYear: 1967,
    genreIds: [6],
    seriesTitle: null,
    pageCount: 432,
    tagsIds: [1, 3],
    description:
      'One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family.',
    authorId: 3,
  },
  {
    id: 4,
    title: 'Dune',
    subtitle: '',
    originallyPublishedYear: 1965,
    genreIds: [8],
    seriesTitle: null,
    pageCount: 412,
    tagsIds: [1, 3],
    description:
      'Dune is a 1965 science-fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelaznys This Immortal for the Hugo Award in 1966, and it won the inaugural Nebula Award for Best Novel.',
    authorId: 2,
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    subtitle: '',
    originallyPublishedYear: 1813,
    genreIds: [8],
    seriesTitle: null,
    pageCount: 380,
    tagsIds: [1, 7],
    description:
      'The book is narrated in free indirect speech following the main character Elizabeth Bennet as she deals with matters of upbringing, marriage, moral rightness and education in her aristocratic society.',
    authorId: 5,
  },
];

const genres = [
  { id: 1, name: 'Classic' },
  { id: 2, name: 'Crime' },
  { id: 3, name: 'Fantasy' },
  { id: 4, name: 'Historical fiction' },
  { id: 5, name: 'Horror' },
  { id: 6, name: 'Magical realism' },
  { id: 7, name: 'Romance' },
  { id: 8, name: 'Science fiction' },
  { id: 9, name: 'Travel' },
  { id: 10, name: 'Biography' },
  { id: 11, name: 'Essay' },
  { id: 12, name: 'Poetry' },
  { id: 12, name: 'Journalism' },
];

const tags = [
  { id: 1, name: 'Best Books of All Time' },
  { id: 2, name: 'Top 2020' },
  { id: 3, name: 'Best Sellers' },
  { id: 4, name: 'Best for Holiday' },
  { id: 5, name: 'Christmas' },
  { id: 5, name: 'Great Love Story' },
];

const Authors = [
  {
    id: 1,
    firstName: 'Francis',
    lastName: 'Fitzgerald',
    dateOfBirth: new Date('1896-09-24'),
    country: 'United States',
  },
  {
    id: 2,
    firstName: 'Charles',
    lastName: 'Dickens',
    dateOfBirth: new Date('1812-02-07'),
    country: 'United Kingdom',
  },
  {
    id: 3,
    firstName: 'Gabriel Garcia',
    lastName: 'Marquez',
    dateOfBirth: new Date('1927-03-06'),
    country: 'Colombia',
  },
  {
    id: 4,
    firstName: 'Frank',
    lastName: 'Herbert',
    dateOfBirth: new Date('1920-08-10'),
    country: 'United States',
  },
  {
    id: 5,
    firstName: 'Jane',
    lastName: 'Austen',
    dateOfBirth: new Date('1775-12-16'),
    country: 'United Kingdom',
  },
];

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  get(): Observable<Book[]> {
    return of(books);
  }

  getDictionaries(): Observable<BookDictionaries> {
    return of({
      genres,
      tags,
    });
  }
}
