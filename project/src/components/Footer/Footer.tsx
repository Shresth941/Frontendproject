import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <footer className="footer-container">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Footer Links */}
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
        </nav>

        {/* Right Section: Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`toggle-btn ${darkMode ? 'dark' : 'light'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center py-4 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
