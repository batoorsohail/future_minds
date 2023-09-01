import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<NewsPage />} />
    </Routes>
  </>
);

export default App;
