import type { FC } from 'react';
import type { Book } from '../../types/book';
import { useBooks } from '../../hooks/useBooks';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ItemList } from '../../components/ItemList/ItemList';

interface HomePageProps {
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const HomePage: FC<HomePageProps> = ({ isFavorite, onToggleFavorite }) => {
  const { books, loading, error, searchTerm, setSearchTerm } = useBooks('react');

  return (
    <main className="home-page">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar libros por título o autor..."
      />
      <ItemList
        books={books}
        loading={loading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
};