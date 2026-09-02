import type { FC } from 'react';
import type { Book } from '../../types/book';
import { Favorites } from '../../components/Favorites/Favorites';
import './FavoritesPage.css';

interface FavoritesPageProps {
  favorites: Book[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const FavoritesPage: FC<FavoritesPageProps> = ({
  favorites,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <main className="favorites-page">
      <h2 className="favorites-page__title">Mis Libros Favoritos</h2>
      <Favorites
        favorites={favorites}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
};