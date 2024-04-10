import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'; // Importa tu componente principal (por ejemplo, App)
import './index.css'
import './App.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);

