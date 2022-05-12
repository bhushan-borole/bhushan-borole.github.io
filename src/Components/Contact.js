import React, { useState, useEffect } from "react";
import SnackBar from "my-react-snackbar";

const FORMSPARK_URL = "https://submit-form.com/CARCkqSD";

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  //   const notify = () => toast.success("Here is your toast.");

  const onSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    await fetch(FORMSPARK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    setOpen(true);
    setEmail("");
    setMessage("");
    setTimeout(setDisable(false), 2000);
  };

  return (
    <section id="contact" class="contact section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 style={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}>
            Get in Touch
          </h2>
        </div>
        <div id="contact-form">
          <form onSubmit={onSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" disabled={disable}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <SnackBar
        open={open}
        message={"Your Message is sent!"}
        position="bottom-left"
        type="success"
        yesLabel="Ok"
        timeout={2000}
        onYes={() => {
          setOpen(false);
        }}
        closeOnClick={true}
      />
    </section>
  );
}

export default Contact;
