import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
    const chat_id = 5258999486;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `📧 Yangi obunachi: ${email}`;

    axios.post(url, {
      chat_id: chat_id,
      text: text
    }).then(() => {
      alert("Muvaffaqiyatli obuna bo'ldingiz! ✅");
      setEmail("");
    }).catch((err) => {
      console.error(err);
      alert("Xatolik yuz berdi. Konsolni tekshiring.");
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-container">
          <h2 className="contact-title">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <form className="contact-form" onSubmit={sendMessage}>
            <div className="input-wrapper">
              <span className="email-icon">📧</span>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe to NewsLetter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;