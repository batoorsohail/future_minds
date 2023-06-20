import React from 'react';

const aboutInfo = [
  {
    img: 'url',
    name: 'NO UPFRONT COST',
    details: "You owe us nothing until you get a job —no matter what country you're in.",
  },
  {
    img: 'url',
    name: 'COLLABORATIVE LEARNING',
    details: 'Learn through pair programming, group projects, career coach guidance, and project reviews.',
  },
  {
    img: 'url',
    name: 'GLOBAL OPPORTUNITIES',
    details: 'Connect with global jobs after gaining experience working on a remote team.',
  },
  {
    img: 'url',
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
    {aboutInfo.map((about) => (
      <article className="about-container" key={about.id}>
        <img src={about.img} alt={about.name} />
        <h4>{about.name}</h4>
        <p>{about.details}</p>
      </article>
    ))}
  </section>
);

export default About;
