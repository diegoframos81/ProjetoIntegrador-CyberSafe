/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
