import { useState } from 'react';
import SearchBar from '../SearchBar';

import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="header-container">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex items-center space-x-8">
          <a href="/" className="logo">MyStore</a>
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link">Shop</a>
          <a href="/" className="nav-link">About</a>
        </nav>

        <div className="flex items-center space-x-6">
         
          <SearchBar />
          <button
            onClick={toggleDarkMode}
            className={`toggle-btn ${darkMode ? 'dark' : 'light'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
