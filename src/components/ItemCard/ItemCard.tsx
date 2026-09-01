import type { FC } from 'react';
import { Star } from 'lucide-react';
import type { Book } from '../../types/book';
import './ItemCard.css';

interface ItemCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

export const ItemCard: FC<ItemCardProps> = ({
  book,
  isFavorite,
  onToggleFavorite,
}) => {
  const { title, coverUrl, authors, publishYear } = book;

  return (
    <article className="item-card">
      <div className="item-card__image-container">
        <img src={coverUrl} alt={title} className="item-card__image" />
      </div>
      <div className="item-card__content">
        <div className="item-card__header">
          <h3 className="item-card__title">{title}</h3>
          <button
            type="button"
            className="item-card__favorite-btn"
            onClick={() => onToggleFavorite(book)}
            title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Star
              size={22}
              className={`item-card__star ${
                isFavorite ? 'item-card__star--active' : ''
              }`}
            />
          </button>
        </div>

        <p className="item-card__info">
          <strong>Autor(es):</strong> {authors.join(', ')}
        </p>
        {publishYear && (
          <p className="item-card__info">
            <strong>Año:</strong> {publishYear}
          </p>
        )}
      </div>
    </article>
  );
};