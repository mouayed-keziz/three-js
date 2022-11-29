import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainScene from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainScene />
  </React.StrictMode>
);