
import React, { useState, useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import avatar from "../assets/projects/Avatar.png";

const Contact = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bdefd559-3b6b-4443-a7ce-a370e957af9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
      console.log("Error", data);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">CONTACT</h2>
      <div className="contact-container">
        {/* Left Contact Info */}
        <div className="contact-info" data-aos="fade-right">
          <h3>Let’s Connect</h3>
          <p><FaMapMarkerAlt /> New Delhi, India</p>
          <p><FaEnvelope />hiremanishforwork@gmail.com</p>
          <p><FaPhoneAlt />+91 8851742591</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/manish-singh-916a9b276/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/officialmanish03" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          <img src={avatar} alt="Avatar" className="contact-avatar" />
        </div>

        {/* Right Contact Form */}
        <form onSubmit={onSubmit} className="contact-form" data-aos="fade-left">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
          <span className="form-status">{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
