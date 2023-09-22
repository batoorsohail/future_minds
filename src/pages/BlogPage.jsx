import React from 'react';
import './blogPage.css';
import Blog from '../components/Blogs';

const AboutPage = () => (
  <section className="news-section">
    <article className="title-container">
      <h1 className="aboutPage-title">Future Minds Insight</h1>
      <p className="about-page-info">
        The latest information on Microverse, software engineering,
        collaborative learning, remote work, and closing the gap between talent and opportunity.
      </p>
    </article>
    <Blog />
  </section>
);

export default AboutPage;
