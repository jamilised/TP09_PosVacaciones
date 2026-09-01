import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/Home/Home';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { useFavorites } from './hooks/useFavorites';
import type { Book } from './types/book';

export function App() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = (book: Book) => {
    if (isFavorite(book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <FavoritesPage
              favorites={favorites}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;