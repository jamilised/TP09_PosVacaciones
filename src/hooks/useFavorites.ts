import { useState, useEffect } from 'react';
import type { Book } from '../types/book';
import { getStoredFavorites, saveStoredFavorites } from '../storage/favoriteStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    const initialFavorites = getStoredFavorites();
    setFavorites(initialFavorites);
  }, []);

  useEffect(() => {
    saveStoredFavorites(favorites);
  }, [favorites]);

  const addFavorite = (book: Book) => {
    setFavorites((prevFavorites) => {

        const exists = prevFavorites.some((fav) => fav.id === book.id);
      if (exists) return prevFavorites;
      return [...prevFavorites, book];
    });
  };

  const removeFavorite = (bookId: string) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter((fav) => fav.id !== bookId)
    );
  };

  const isFavorite = (bookId: string): boolean => {
    return favorites.some((fav) => fav.id === bookId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};