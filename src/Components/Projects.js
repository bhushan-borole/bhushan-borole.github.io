import { useState } from "react";
import Icon from "./Icon";

const items = [
  {
    title: "Nuharc — Smart City Disaster Report App",
    blurb:
      "A realtime, citizen-driven disaster response platform for Dublin that fuses live traffic, emergency dispatch, and dynamic re-routing into one always-on system.",
    points: [
      "Realtime traffic + incident reporting with up to 300 ms latency end-to-end.",
      "Fuses heterogeneous velocity data streams for ~99.9% accuracy.",
      "Socket-driven live disaster updates and on-the-fly user re-routing.",
      "Auto-dispatches emergency services the moment a citizen reports.",
      "From-scratch weighted round-robin load balancer with healthchecks.",
      "Fully Dockerised, deployed on Azure VM, MongoDB for storage.",
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Docker", "Azure"],
    links: [{ url: "https://github.com/TCD-ASE-6/Nuharc", text: "Source" }],
  },
  {
    title: "Woyse — Multilingual Entity Recognition",
    blurb:
      "An end-to-end intent and entity recognition microservice that understands user queries across multiple languages and streams structured insights back in real time.",
    points: [
      "Django-based microservice exposing a clean intent/entity API.",
      "Tornado-powered socket layer for low-latency streaming responses.",
      "Multilingual NLU pipeline built on Python + Rasa.",
      "Pluggable training pipeline — drop in new languages with minimal code changes.",
    ],
    tech: ["Python", "Django", "Rasa", "Tornado"],
    links: [],
  },
  {
    title: "Limitless File Sharing",
    blurb:
      "A playful experiment that turns Google Sheets into an unlimited, free file-sharing backplane — share any amount of data without ever touching object storage.",
    points: [
      "Files are base64-encoded, chunked, and uploaded to Google Sheets as rows.",
      "Chunk order is preserved and reassembled client-side on download.",
      "Client/server split — Flask backend, lightweight Python client.",
      "Zero storage cost: piggybacks on Google's free Sheets quota.",
    ],
    tech: ["Python", "Flask", "Sheets API"],
    links: [{ url: "https://github.com/vinay-deshmukh/Limitless-Client", text: "Source" }],
  },
  {
    title: "Justalk",
    blurb:
      "A minimal, real-time chat application powered by React and Firebase — built to explore Firebase Auth, Firestore listeners, and instant-deploy hosting.",
    points: [
      "Real-time messaging using Firestore listeners.",
      "Auth handled via Firebase Auth (Google sign-in).",
      "Deployed on GitHub Pages straight from the repo.",
      "Zero backend — pure JAMstack, fully serverless.",
    ],
    tech: ["React", "Firebase"],
    links: [
      { url: "https://github.com/bhushan-borole/justalk", text: "Source" },
      { url: "https://bhushan-borole.github.io/justalk/", text: "Demo" },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 3);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">03 — Things I've built</div>
          <h2>Selected projects</h2>
          <div className="underline" />
        </div>
        <div className="projects-grid">
          {visible.map((p, i) => (
            <article className="project-card reveal" key={i}>
              <div className="pc-num">PROJECT / {String(i + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <ul>
                {p.points.slice(0, 4).map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
              <div className="tech-tags">
                {p.tech.map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="pc-links">
                  {p.links.map((l, j) => (
                    <a className="pc-link" key={j} href={l.url} target="_blank" rel="noreferrer">
                      {l.text} <Icon name="external" size={13} />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        {items.length > 3 && (
          <button
            className="btn btn-ghost toggle-projects"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : `Show all (${items.length})`}
          </button>
        )}
      </div>
    </section>
  );
}
