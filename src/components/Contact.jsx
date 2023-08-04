import React from "react";
import { contactText } from "../constants";

function Contact() {
  return (
    <section id="contact">
      <div className="contactInner">
        <h2 className="contactTitle">Contact</h2>
        <div className="contactLines" aria-hidden="true">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <div className="contactText">
          <div className="text">
            {contactText.map((contact, index) => (
              <div key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contactLines bottom" aria-hidden="true">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
