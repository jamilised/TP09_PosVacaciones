import type { FC } from 'react';
import type { Book } from '../../types/book';
import { ItemList } from '../ItemList/ItemList';
import './Favorites.css';

interface FavoritesProps {
  favorites: Book[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const Favorites: FC<FavoritesProps> = ({
  favorites,
  isFavorite,
  onToggleFavorite,
}) => {
  if (favorites.length === 0) {
    return (
      <p className="favorites__empty">
        Aún no agregaste libros a tu lista de favoritos.
      </p>
    );
  }

  return (
    <div className="favorites">
      <ItemList
        books={favorites}
        loading={false}
        error={null}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};