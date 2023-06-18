import React from 'react';
import './homePage.css';
import Teachers from '../components/Teachers';

const HomePage = () => (
  <main>
    <section className="main-container">
      <article className="main">
        <div>
          <h2 className="main-text">Become an international software developer, from anywhere.</h2>
        </div>
        <div>
          <p className="info-text">
            Lorem ipsum dolor sit amet consectetur at facilis placeat quam totam saepe.
          </p>
        </div>
        <div>
          <button className="connect-btn" type="button">Connect Us</button>
        </div>
      </article>
    </section>
    <Teachers />
  </main>
);

export default HomePage;
