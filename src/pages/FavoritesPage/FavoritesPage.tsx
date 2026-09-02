import { useState, type FC } from 'react';
import type { Book } from '../../types/book';
import { Favorites } from '../../components/Favorites/Favorites';
import { BookDetailModal } from '../../components/BookDetailModal/BookDetailModal';
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
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <main className="favorites-page">
      <h2 className="favorites-page__title">Mis Libros Favoritos</h2>
      <Favorites
        favorites={favorites}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        onSelectBook={setSelectedBook}
      />
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        isFavorite={selectedBook ? isFavorite(selectedBook.id) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
};