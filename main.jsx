import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext'; // make sure path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);