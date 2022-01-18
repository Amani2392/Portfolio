import React , { useRef }from "react";
import "../css/Contact.scss";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_w1sm82d", 'template_imcbacs', form.current, 'user_dql3JT4EIQq5y54QErm2m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  return <div className="contact" id="contact">
 
    <div className="left">
      <h1>Get in touch!</h1>
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
    <div className="right">
    <img
            src="https://benevity.com/hubfs/benevity_main_assets_2021/contact-us/contactus_hero_updated-01.png"
            alt="arrow down"
          />
    </div>
  </div>;
};

export default Contact;



