import type { Book } from '../types/book';

const FAVORITES_KEY = '@app_books_favorites';

export const getStoredFavorites = (): Book[] => {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer favoritos de LocalStorage:', error);
    return [];
  }
};

export const saveStoredFavorites = (favorites: Book[]): void => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error al guardar favoritos en LocalStorage:', error);
  }
};