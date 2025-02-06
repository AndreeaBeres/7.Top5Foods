import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Europe from './pages/Europe';
import Asia from './pages/Asia';
import Africa from './pages/Africa';
import America from './pages/America';
import './Home.css';
import './MainContent.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Europe" element={<Europe />} />
        <Route path="Asia" element={<Asia />} />
        <Route path="Africa" element={<Africa />} />
        <Route path="America" element={<America />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
