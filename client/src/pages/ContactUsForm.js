import React, { useState } from "react";
import "./ContactUsForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <article className="theForm">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          style={{ width: "60%", height: "50px", fontSize: "16px", padding: "10px" }}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ width: "60%", height: "50px", fontSize: "16px", padding: "10px" }}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          style={{ width: "60%", height: "150px", fontSize: "16px", padding: "10px" }}
        />
      </div>
      <div>
        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Send Message</button>
      </div>
      </article>
    </form>
  );
}

export default ContactForm;
