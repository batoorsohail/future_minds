import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';
import CreateBlogPage from './pages/CreateBlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/createBlog" element={<CreateBlogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </>
);

export default App;
