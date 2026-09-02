import type { FC } from 'react';
import { Star } from 'lucide-react';
import type { Book } from '../../types/book';
import './BookDetailModal.css';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

export const BookDetailModal: FC<BookDetailModalProps> = ({
  book,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!book) return null;

  return (
    <div className="book-modal__overlay" onClick={onClose}>
      <div className="book-modal__card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="book-modal__close-btn"
          onClick={onClose}
          title="Cerrar"
        >
          &times;
        </button>

        <div className="book-modal__header">
          <h3 className="book-modal__title">{book.title}</h3>
        </div>

        <div className="book-modal__body">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="book-modal__cover"
          />

          <div className="book-modal__info">
            <p>
              <strong>Autor(es):</strong> {book.authors.join(', ')}
            </p>
            {book.publishYear && (
              <p>
                <strong>Año de publicación:</strong> {book.publishYear}
              </p>
            )}
            {book.numberOfPages && (
              <p>
                <strong>Páginas:</strong> {book.numberOfPages}
              </p>
            )}
            {book.publishers && book.publishers.length > 0 && (
              <p>
                <strong>Editorial:</strong> {book.publishers.join(', ')}
              </p>
            )}

            {book.firstSentence && (
              <blockquote className="book-modal__quote">
                "{book.firstSentence}"
              </blockquote>
            )}

            {book.subjects && book.subjects.length > 0 && (
              <div>
                <strong>Temas:</strong>
                <div className="book-modal__tags">
                  {book.subjects.map((sub, i) => (
                    <span key={i} className="book-modal__tag">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="book-modal__footer">
          <button
            type="button"
            className="book-modal__favorite-btn"
            onClick={() => onToggleFavorite(book)}
            title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Star
              size={26}
              className={`book-modal__star ${
                isFavorite ? 'book-modal__star--active' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};