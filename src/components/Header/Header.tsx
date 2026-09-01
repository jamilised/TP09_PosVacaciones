import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = 'Explorador de Libros' }) => {
  return (
    <header className="app-header">
      <h1 className="app-header__title">{title}</h1>
      <nav className="app-header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `app-header__link ${isActive ? 'app-header__link--active' : ''}`
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            `app-header__link ${isActive ? 'app-header__link--active' : ''}`
          }
        >
          Favoritos
        </NavLink>
      </nav>
    </header>
  );
};