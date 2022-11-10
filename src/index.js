import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TourProvider } from './context/tour_context';
import { QueryProvider } from './context/query_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TourProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </TourProvider>
  </React.StrictMode>
);


