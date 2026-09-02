import { useState, useEffect } from 'react';
import type { Book } from '../types/book';
import { getStoredFavorites, saveStoredFavorites } from '../storage/favoriteStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    const stored = getStoredFavorites();
    setFavorites(stored);
  }, []);

  const addFavorite = (book: Book) => {
    if (!isFavorite(book.id)) {
      const updated = [...favorites, book];
      setFavorites(updated);
      saveStoredFavorites(updated);
    }
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((b) => b.id !== id);
    setFavorites(updated);
    saveStoredFavorites(updated);
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some((b) => b.id === id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};