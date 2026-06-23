import Icon from "./Icon";
import heroImg from "./images/6.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <h1>
              Bhushan <span className="grad">Borole</span>
            </h1>
            <div className="role">Software Engineer</div>
            <p className="bio">
              I'm a software engineer based in Dublin, currently building the sync service
              that keeps billions of identities, groups and access policies consistent across
              Microsoft's global data stores, alongside real-time threat detection that
              spots anomalies the moment they appear. I love turning messy,
              ambiguous problems into systems that scale calmly under pressure.
            </p>
            <p className="bio">
              Off the keyboard you'll find me playing tabla, exploring new sounds, or
              losing a few ranked games. Always experimenting, always learning.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="download" size={16} /> Resume
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="socials">
              <a href="https://github.com/bhushan-borole" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href="https://www.linkedin.com/in/bhushan-borole/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href="https://twitter.com/bhushanborole26" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Icon name="twitter" />
              </a>
              <a href="https://www.instagram.com/bhushan_borole_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UC8TXgNmZW2hMis074yGOTUQ" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Icon name="youtube" />
              </a>
              <a href="mailto:borolebhushan8@gmail.com" aria-label="Email">
                <Icon name="mail" />
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap reveal">
            <div className="hero-photo">
              <img src={heroImg} alt="Bhushan Borole" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
