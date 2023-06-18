import React from 'react';

const teacherInfo = [
  {
    img: './images/bill.png',
    name: 'Bill Gates',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/elon.png',
    name: 'Elon Mush',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/jeff.png',
    name: 'Jeff bezos',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
];

const Teachers = () => (
  <section id="teacher-section">
    <h2>We help you to change your life</h2>
    <p>
      Microverse students are from countries around the world.
      At Microverse, you learn with a diverse, driven community and connect
      to life-changing job opportunities.
    </p>
    {teacherInfo.map((teacher) => (
      <article className="teachers-sample" key={teacher.id}>
        <img src={teacher.img} className="teachers-images" alt={teacher.name} />
        <div className="teachers-info">
          <h3 className="teachers-name">{teacher.name}</h3>
          <p className="teachers-company">{teacher.company}</p>
          <div className="short-line" />
          <p className="teachers-subject">{teacher.subject}</p>
        </div>
      </article>
    ))}
  </section>
);

export default Teachers;
