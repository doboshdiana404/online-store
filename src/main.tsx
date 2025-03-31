import React from 'react';

import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './App';
import './index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);
