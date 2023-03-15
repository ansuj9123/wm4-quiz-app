// import React, { useState } from "react";
// import "./FormContactUs.css";

// const ContactUsForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//     // Replace the above console.log() with your desired functionality, e.g. sending a POST request to a server
//   };

//   return (
//     <form className="theForm" onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         id="name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       <label htmlFor="email">Email:</label>
//       <input
//         id="email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <label htmlFor="message">Message:</label>
//       <textarea
//         className="theMessage"
//         id="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//       ></textarea>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactUsForm;
