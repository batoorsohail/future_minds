import React from 'react';

const Contact = () => (
  <section className="contact-form" id="contact">
    <div className="form-container">
      <div className="title-container">
        <h3 className="contact-me">Contact us</h3>
        <p className="form-text">
          If you are interested in our goal, and want to support us. You can leave a message for us.
        </p>
      </div>
      <form action="https://formspree.io/f/xpzevnle" method="post" id="form">
        <input
          type="text"
          name="full-name"
          id="name"
          className="form-input"
          maxLength="30"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="Email"
          id="email"
          className="form-input"
          required
          placeholder="me@gmail.com"
        />
        <textarea
          name="message"
          id="textarea"
          className="textarea form-input"
          cols="30"
          rows="10"
          placeholder="Write your message here"
          maxLength="500"
          required
        />
        <div>
          <button className="button form-button" id="contact-button" type="submit">Get In Touch</button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
