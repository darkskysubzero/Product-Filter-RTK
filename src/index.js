import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./index.css";

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './store/productsApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
); 