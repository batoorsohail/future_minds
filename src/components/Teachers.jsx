import React from 'react';
import bill from '../images/bill.png';
import ehsan from '../images/ehsan.png';
import sohail from '../images/sohail.png';

const teacherInfo = [
  {
    img: ehsan,
    name: 'Ehsan Hozori',
    position: 'Founder',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: sohail,
    name: 'Ahmad Sohail Batoor',
    position: 'CO Founder',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: bill,
    name: 'Bill Gates',
    position: 'Member',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
];

const Teachers = () => (
  <section className="teacher-section">
    <h2 className="te-h2-title">
      We help you to change your life
    </h2>
    <p className="te-p-info">
      Microverse students are from countries around the world.
      At Microverse, you learn with a diverse, driven community and connect
      to life-changing job opportunities.
    </p>
    {teacherInfo.map((teacher) => (
      <article className="teachers-container" key={teacher.id}>
        <img src={teacher.img} className="teachers-images" alt={teacher.name} />
        <div className="teachers-info">
          <h4 className="teachers-name">{teacher.name}</h4>
          <p className="teachers-position">{teacher.position}</p>
          <p className="teachers-subject">{teacher.subject}</p>
        </div>
      </article>
    ))}
  </section>
);

export default Teachers;
