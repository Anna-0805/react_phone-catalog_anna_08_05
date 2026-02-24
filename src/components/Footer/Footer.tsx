import React from 'react';
import './Footer.scss';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Логотип */}
        <div className="footer__logo">
          <img
            src={theme === 'dark' ? 'img/dark-Logo.svg' : 'img/Logo.svg'}
            alt="Nice Gadgets"
          />
        </div>

        {/* Навигация */}
        <nav className="footer__nav">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            {'github'}
          </a>
          <a href="#contacts">{'contacts'}</a>
          <a href="#rights">{'rights'}</a>
        </nav>

        {/* Кнопка вверх */}
        <button
          className="footer__back-to-top"
          onClick={handleScrollToTop}
          aria-label={'backToTop'}
        >
          <span>{'backToTop'}</span>
          <div className="footer__arrow">
            <img src={`img/icons/up.svg`} alt="Up" />
          </div>
        </button>
      </div>
    </footer>
  );
};
