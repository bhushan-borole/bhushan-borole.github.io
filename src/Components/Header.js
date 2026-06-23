import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "About", icon: "user" },
  { id: "experience", label: "Work", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "code" },
  { id: "skills", label: "Skills", icon: "arrow" },
  { id: "education", label: "Education", icon: "school" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export default function Header() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (pos >= top && pos < bottom) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" aria-label="Primary">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={active === l.id ? "active" : ""}
          aria-current={active === l.id ? "page" : undefined}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
