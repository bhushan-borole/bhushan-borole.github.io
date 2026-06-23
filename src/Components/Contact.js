import { useState } from "react";
import Icon from "./Icon";

const FORMSPARK_URL = "https://submit-form.com/CARCkqSD";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setEmail("");
      setMessage("");
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      setError("Something went wrong. Try emailing directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">06 — Say hi</div>
          <h2>Get in touch</h2>
          <div className="underline" />
        </div>
        <div className="contact-card reveal">
          <p>
            Open to interesting collaborations, side projects, or just a chat about
            distributed systems, security, music — or all three. Drop a message.
          </p>
          <form className="contact-form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {error && <div style={{ color: "#ff6b8b", fontSize: 14 }}>{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Sending…" : <>Send message <Icon name="arrow" size={16} /></>}
            </button>
          </form>
        </div>
      </div>
      <div className={`toast ${toast ? "show" : ""}`}>✓ Message sent — talk soon!</div>
    </section>
  );
}
