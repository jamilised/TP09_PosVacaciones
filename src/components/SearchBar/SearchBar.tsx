import type { FC, ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar por título o autor...',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};