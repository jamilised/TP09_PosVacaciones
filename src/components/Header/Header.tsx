import type { FC } from 'react';
import './Header.css';

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = 'Explorador de Libros' }) => {
  return (
    <header className="app-header">
      <h1 className="app-header__title">{title}</h1>
    </header>
  );
};