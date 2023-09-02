import React from 'react';
import blog1 from '../images/blog1.webp';
import blog2 from '../images/blog2.webp';

const Blogs = () => {
  const blogs = [
    {
      image: blog1,
      blogTitle: 'The First Gradated Students of Future Minds',
      textDetails: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolores perspiciatis vero soluta quasi laborum, magni dolor sint quibusdam minima voluptate! Dignissimos eligendi temporibus nesciunt vitae dolor maiores tenetur delectus quaerat, recusandae aliquid et, ab, repudiandae minima voluptate quos sequi.',
      date: 'Sep/01/2023',
    },
    {
      image: blog2,
      blogTitle: 'Our Teachers and Education System',
      textDetails: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolores perspiciatis vero soluta quasi laborum, magni dolor sint quibusdam minima voluptate! Dignissimos eligendi temporibus nesciunt vitae dolor maiores tenetur delectus quaerat, recusandae aliquid et, ab, repudiandae minima voluptate quos sequi.',
      date: 'Sep/02/2023',
    },
  ];
  return (
    <section className="blogs">
      {blogs.map((blog) => (
        <section className="blog-container" key={blogs.id}>
          <img src={blog.image} alt={blog.image} className="blog-image" />
          <article className="blog-details">
            <h3>{blog.blogTitle}</h3>
            <p>{blog.textDetails}</p>
            <p>{blog.date}</p>
          </article>
        </section>
      ))}
    </section>
  );
};

export default Blogs;
