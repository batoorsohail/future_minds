import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Blog" element={<BlogPage />} />
    </Routes>
  </>
);

export default App;
