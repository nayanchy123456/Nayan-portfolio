import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nrgb2xh',
      'template_bnkks1o',
      form.current,
      '6KWMRXxkQQC1taXjW'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      {/* Attach ref and onSubmit handler */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Show status message below form */}
      {status && <p className="status-message">{status}</p>}

      <SocialLinks />
    </section>
  );
};

export default Contact;
