import { useState, useEffect } from 'react';
import type { Book } from '../types/book';
import { fetchBooksFromApi } from '../services/api';

const RANDOM_TOPICS = [
  'fiction',
  'mystery',
  'fantasy',
  'adventure',
  'history',
  'science',
  'art',
  'magic',
  'nature',
  'music',
  'philosophy',
  'classic'
];

const getRandomTopic = (): string => {
  const randomIndex = Math.floor(Math.random() * RANDOM_TOPICS.length);
  return RANDOM_TOPICS[randomIndex];
};

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [initialRandomQuery] = useState<string>(() => getRandomTopic());

  useEffect(() => {
    const queryToFetch = searchTerm.trim() !== '' ? searchTerm : initialRandomQuery;

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBooksFromApi(queryToFetch);
        
        const validBooks = data.filter((book) => book.title && book.id);
        setBooks(validBooks);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, initialRandomQuery]);

  return {
    books,
    searchTerm,
    setSearchTerm,
    loading,
    error,
  };
};