import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zu17i4d",
      "template_qd7kvv8",
      e.target,
      "RwKSb6KC_JO6Q2KpF"
    );
  };

  return (
    <div className="contact_page" id="contact">
      <div className="contact_left">
        <h1 className="left_contact">Get In Touch With Me</h1>
        <div className="contact_image_div">
          <img src="Port/pics/contact.png" alt="" className="contact_image" />
        </div>
      </div>

      <form action="" method="POST" onSubmit={sendEmail}>
        <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} name="from_name" />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} name="email" />
        </div>
        <div className="form_control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="8"
            ref={messageRef}
            name="message"
          />
        </div>
        <div className="sendBtn">
          <button className="send" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
