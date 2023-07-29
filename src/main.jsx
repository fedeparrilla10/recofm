import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { TeamsProvider } from './context/TeamsContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TeamsProvider>
      <App />
    </TeamsProvider>
  </BrowserRouter>
);
