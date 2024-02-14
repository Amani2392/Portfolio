import React, { useRef } from "react";
import "../css/Contact.scss";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_07bj85t",
        "template_imcbacs",
        form.current,
      "y4LJ5aSb4cCbIHqXTgJqJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="right">
        <div className="img-container">
          <img src="assets/getintouch.svg" alt=""/>
        </div>
        <nav>
          <ul>
            <li key="item1">
              <a
                href="https://www.instagram.com/amani_baba_haj/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li key="item2">
              <a
                href="https://www.linkedin.com/in/amani-baba-haj/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>Linkedin</span>
              </a>
            </li>
            <li key="item3">
              <a
                href="https://github.com/Amani2392"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="left">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
