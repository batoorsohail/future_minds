import React from 'react';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import about3 from '../images/about3.png';
import about4 from '../images/about4.png';

const aboutInfo = [
  {
    img: about1,
    name: 'NO UPFRONT COST',
    details: "You owe us nothing until you get a job —no matter what country you're in.",
  },
  {
    img: about2,
    name: 'COLLABORATIVE LEARNING',
    details: 'Learn through pair programming, group projects, career coach guidance, and project reviews.',
  },
  {
    img: about3,
    name: 'GLOBAL OPPORTUNITIES',
    details: 'Connect with global jobs after gaining experience working on a remote team.',
  },
  {
    img: about4,
    name: 'SUPPORT AND ACCOUNTABILITY',
    details: 'Receive support from our dedicated Student Success Team, mentors, a personal career coach, and more.',
  },
];

const About = () => (
  <section className="about-section">
    <h2 className="about-title">
      A New Learning Experience
    </h2>
    <p className="about-info">
      Microverse invests in you. We support you throughout your journey with us
      and your career. New cohorts start every 5 weeks, learn more about our
      next start dates and applying!
    </p>
    <section className="about">
      {aboutInfo.map((about) => (
        <article className="about-container" key={about.id}>
          <img src={about.img} className="about-img" alt={about.name} />
          <h3 className="about-name">{about.name}</h3>
          <p className="about-details">{about.details}</p>
        </article>
      ))}
    </section>
  </section>
);

export default About;
