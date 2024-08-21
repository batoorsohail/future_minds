import './createBlogPage.css';

const CreateBlogPage = () => {
  return (
    <section className="create-blog-section">
      <h2 className="create-blog-title">Create a Blog</h2>
      <form className="create-blog-form">
        <label className="form-label">Blog title</label>
        <input type="text" className="input" placeholder="Enter the blog title" />
        
        <label className="form-label">Image link</label>
        <input type="text" className="input" placeholder="Enter the image link" />
        
        <label className="form-label">Blog content</label>
        <textarea className="input input-textarea" placeholder="Write your blog content here"></textarea>
        
        <button className="submit-button">Create blog</button>
      </form>
    </section>
  );
}

export default CreateBlogPage;