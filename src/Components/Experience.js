const items = [
  {
    date: "Sep 2022 — Present",
    title: "Microsoft",
    sub: "Software Engineer 2",
    points: [
      "Engineered security automation pipelines to detect threat actor activity across Microsoft Identity services, strengthening anomaly detection, signal correlation, and incident response coverage across upstream and downstream identity services.",
      "Owned security posture monitoring for ~200 TCB (Trusted Computing Base) services, driving compliance readiness, control attestation, and operational accountability across the identity trust boundary",
      "Led privacy engineering across IDNA by identifying EUDB (EU Data Boundary) and GDPR compliance gaps, raising data residency and data subject rights violations, and partnering with service owners to remediate non-compliant data flows.",
      "Operate high-throughput GetChanges-based delta replication with low-latency end-to-end propagation, leveraging watermark/cookie-based change tracking, partition-aware fan-out, and a highly available ring topology to keep identity data consistent, fresh, and authoritative across distributed systems.",
    ],
  },
  {
    date: "Nov 2020 — Feb 2021",
    title: "Mobisy Technologies",
    sub: "R&D Intern",
    points: [
      "Collected JSON data via web-scraping and open APIs, stored in an RDBMS.",
      "Built an SKU classification system on top of the curated dataset.",
    ],
  },
  {
    date: "Sep 2019 — Oct 2019",
    title: "Techskills IT Consultants",
    sub: "Backend Developer",
    points: [
      "Developed RESTful backend services using the Spring Framework.",
      "Wrote SQL / JPQL queries for data persistence with Spring Data JPA.",
    ],
  },
  {
    date: "Aug 2018 — Jan 2019",
    title: "TechSkills IT Consultants",
    sub: "Full-stack Developer Intern",
    points: [
      "Built a Meeting App handling end-to-end meeting data using Spring Boot + MVC.",
      "Designed REST APIs and consumed them in the frontend.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">02 — Where I've worked</div>
          <h2>Experience</h2>
          <div className="underline" />
        </div>
        <div className="timeline">
          {items.map((it, i) => (
            <div className="tl-item reveal" key={i}>
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-date">{it.date}</div>
                <h3>{it.title}</h3>
                <div className="sub">{it.sub}</div>
                <ul>
                  {it.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
