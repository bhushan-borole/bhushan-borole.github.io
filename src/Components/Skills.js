const skills = [
  "JavaScript", "TypeScript", "Python", "Java", "C#",
  "React", "Node.js", "Flask", "Django", "Spring Boot",
  ".NET", "Azure", "GCP", "Docker", "Kubernetes",
  "MongoDB", "PostgreSQL", "MySQL", "Redis",
  "Machine Learning", "TensorFlow", "REST APIs", "Microservices",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">04 — Tools of the trade</div>
          <h2>Skills</h2>
          <div className="underline" />
        </div>
        <div className="skills-cloud reveal">
          {skills.map((s, i) => (
            <span className="skill-chip" key={i} style={{ animationDelay: `${i * 40}ms` }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
