import { useState, useEffect, useMemo } from 'react';
import type { Book } from '../types/book';
import { fetchBooksFromApi } from '../services/api';

export const useBooks = (initialQuery: string = 'react') => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBooksFromApi(initialQuery);
        setBooks(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [initialQuery]);

  const filteredBooks = useMemo(() => {
    if (!searchTerm.trim()) return books;
    
    const term = searchTerm.toLowerCase();
    return books.filter((book) => {
      const matchTitle = book.title.toLowerCase().includes(term);
      const matchAuthor = book.authors.some((author) =>
        author.toLowerCase().includes(term)
      );
      return matchTitle || matchAuthor;
    });
  }, [books, searchTerm]);

  return {
    books: filteredBooks, 
    searchTerm,
    setSearchTerm,
    loading,
    error,
  };
};