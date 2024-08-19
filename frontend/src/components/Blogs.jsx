import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { getBlogs, selectAllBlogs } from '../redux/blogs/blogsSlice';

const Blogs = () => {
  const blogs = useSelector(selectAllBlogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch]);

  return (
    <section className="blogs">
      {blogs.map((blog) => (
        <section className="blog-container" key={blogs.id}>
          {/* <img src={blog.image} alt={blog.image} className="blog-image" /> */}
          <article className="blog-details">
            <h3 className="blog-title-name">{blog.title}</h3>
            <p className="blog-details-text">
              {blog.content.slice(0, 100)}
              {blog.content.length > 100 && '...'}
            </p>
            <div className="blog-card-bottom">
              <p className="blog-date">{blog.createdAt}</p>
              <Link to={`blog/${blog.id}`} className="link-to-blog">
                <p className="link-to-blog-txt">Read More</p>
                <BsArrowRight className="arrow-icon" />
              </Link>
            </div>
          </article>
        </section>
      ))}
    </section>
  );
};

export default Blogs;
