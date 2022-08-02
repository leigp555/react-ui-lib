import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.scss';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
