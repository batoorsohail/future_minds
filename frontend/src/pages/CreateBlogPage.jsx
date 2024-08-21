import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../redux/blogs/blogsSlice';
import './createBlogPage.css';

const CreateBlogPage = () => {
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ content, setContent ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, image, content };
    dispatch(createBlog(newBlog));
    setTitle('');
    setImage('');
    setContent('');
  }

  return (
    <section className="create-blog-section" onSubmit={handleSubmit}>
      <h2 className="create-blog-title">Create a Blog</h2>
      <form className="create-blog-form">
        <label className="form-label">Blog title</label>
        <input
          type="text"
          className="input"
          placeholder="Enter the blog title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        
        <label className="form-label">Image link</label>
        <input
          type="text"
          className="input"
          placeholder="Enter the image link"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        
        <label className="form-label">Blog content</label>
        <textarea
          className="input input-textarea"
          placeholder="Write your blog content here"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          >
        </textarea>
        
        <button className="submit-button">Create blog</button>
      </form>
    </section>
  );
}

export default CreateBlogPage;