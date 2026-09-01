import type { FC } from 'react';
import type { Book } from '../../types/book';
import { ItemCard } from '../ItemCard/ItemCard';
import './ItemList.css';

interface ItemListProps {
  books: Book[];
  loading: boolean;
  error: string | null;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const ItemList: FC<ItemListProps> = ({
  books,
  loading,
  error,
  isFavorite,
  onToggleFavorite,
}) => {
  if (loading) {
    return <div className="item-list__message">Cargando información...</div>;
  }

  if (error) {
    return <div className="item-list__message item-list__message--error">{error}</div>;
  }

  if (books.length === 0) {
    return <div className="item-list__message">No encontramos resultados.</div>;
  }

  return (
    <div className="item-list-grid">
      {books.map((book) => (
        <ItemCard
          key={book.id}
          book={book}
          isFavorite={isFavorite(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};