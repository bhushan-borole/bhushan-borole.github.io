import Icon from "./Icon";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="socials">
          <a href="https://github.com/bhushan-borole" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/bhushan-borole/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="https://twitter.com/bhushanborole26" target="_blank" rel="noreferrer" aria-label="Twitter"><Icon name="twitter" /></a>
          <a href="https://www.instagram.com/bhushan_borole_/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
          <a href="mailto:borolebhushan8@gmail.com" aria-label="Email"><Icon name="mail" /></a>
        </div>
        <div className="credits">
          Crafted with <span className="heart">♥</span> · React · &copy; {new Date().getFullYear()} Bhushan Borole
        </div>
      </div>
    </footer>
  );
}
