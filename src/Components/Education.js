const items = [
  {
    date: "2021 — 2022",
    title: "Trinity College Dublin",
    sub: "MSc, Intelligent Systems",
    points: [
      "Machine Learning · Information Retrieval & Web Search",
      "Data Analytics · Knowledge & Data Engineering",
      "Advanced Software Engineering · Artificial Intelligence · Text Analytics",
    ],
  },
  {
    date: "2016 — 2020",
    title: "St. Francis Institute of Technology",
    sub: "BE, Computer Engineering",
    points: ["CGPA: 8.72 — First class with Distinction"],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">05 — Where I studied</div>
          <h2>Education</h2>
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
                  {it.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
