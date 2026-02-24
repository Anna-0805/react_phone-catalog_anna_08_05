import { createRoot } from 'react-dom/client';
import React from 'react';
import 'bulma/css/bulma.css';
import './styles/grid.scss';
import { Root } from './Root';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <CartProvider>
          <Root />
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
