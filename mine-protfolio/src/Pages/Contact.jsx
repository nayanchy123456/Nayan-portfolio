import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import SocialLinks from "../Components/SocialLinks";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaUser, FaPaperPlane } from 'react-icons/fa';

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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nayanchy2004@gmail.com",
      link: "mailto:nayanchy2004@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+977-9823416640",
      link: "tel:+97798234166409"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "kalanki, Nepal",
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect professionally",
      link: "https://www.linkedin.com/in/nayan-chaudhary-99b126317/"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Want to collaborate or just want to say hello? Feel free to reach out!
        </p>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info-wrapper">
            <h3 className="info-heading">Contact Information</h3>
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div className="contact-info-card" key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-heading">Send a Message</h3>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="input-group textarea-group">
                <textarea 
                  name="message" 
                  rows="6" 
                  placeholder="Your Message" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FaPaperPlane className="btn-icon" />
              </button>
            </form>

            {/* Show status message below form */}
            {status && <p className={`status-message ${status.includes('Failed') ? 'error' : ''}`}>{status}</p>}
          </div>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;

