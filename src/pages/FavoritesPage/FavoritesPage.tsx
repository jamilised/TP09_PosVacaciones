import type { FC } from 'react';
import type { Book } from '../../types/book';
import { ItemList } from '../../components/ItemList/ItemList';
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
      {favorites.length === 0 ? (
        <p className="favorites-page__empty">
          Aún no agregaste libros a tu lista de favoritos.
        </p>
      ) : (
        <ItemList
          books={favorites}
          loading={false}
          error={null}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </main>
  );
};