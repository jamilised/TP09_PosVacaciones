import type { FC } from 'react';
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
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__info">
          <strong>Autor(es):</strong> {authors.join(', ')}
        </p>
        {publishYear && (
          <p className="item-card__info">
            <strong>Año:</strong> {publishYear}
          </p>
        )}
        <button
          className={`item-card__button ${
            isFavorite ? 'item-card__button--remove' : 'item-card__button--add'
          }`}
          onClick={() => onToggleFavorite(book)}
        >
          {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
        </button>
      </div>
    </article>
  );
};