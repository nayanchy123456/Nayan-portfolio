import React from 'react';
import './Contact.css';
import SocialLinks from "../Components/SocialLinks";
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="6" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <SocialLinks/>
    </section>
  );
};

export default Contact;
