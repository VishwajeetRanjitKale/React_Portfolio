import React from 'react';
import './contact.css';
import CONTACT from '../../assets/contact-removebg-preview.png'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      
      <div className="main-text scroll-scale">
      <h2>Ask me question</h2>
        <h2>Contact Me</h2>
        <img src={CONTACT} alt="" />
      </div>
      

      <form action="#" className="scroll-bottom">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Address" />
        <input type="text" placeholder="Your Number" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>

        <div className="btn-box formBtn">
          <button type="submit" className="btn">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;


