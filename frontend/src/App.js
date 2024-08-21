import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';
import CreateBlogPage from './pages/CreateBlogPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/createBlog" element={<CreateBlogPage />} />
    </Routes>
  </>
);

export default App;
