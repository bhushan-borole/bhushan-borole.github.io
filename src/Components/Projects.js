import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Nuharc - Smart City Disaster Report App",
      cardDetailedText: [
        "App to simulate disasters in Dublin.",
        "Realtime traffic reporting upto 300ms latency.",
        "Combines different velocity data streams to give a 99.9% accurate data.",
        "Real time changes of disasters and re-routing of current users using sockets implementation.",
        "All Emergency services directed towards the disaster as soon as someone reports.",
        "Entire application is running in a dockerized container and hosted in Azure VM.",
        "From scratch implementation of Load Balancing Algorithm (Weighted Round Robin) with Healthchecks.",
        "All data is stored in NoSQL MongoDB.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["MongoDB", "Express JS", "React JS", "Node JS"],
      links: [
        {
          url: "https://github.com/TCD-ASE-6/Nuharc",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Woyse - A Multilingual Entity Recognition System",
      cardDetailedText: [
        "Build an end-to-end intent and entity recognition microservice in Django.",
        "Built using Python as a main stack, and used Tornado for socket connection.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Django", "Rasa"],
      links: [],
    },
    {
      cardTitle: "Limitless File Sharing App",
      cardDetailedText: [
        "App that allows you to share ANY amount of data from one system to another.",
        "The file is encoded using base64, then it is split into chunks and uploaded to Google Sheets. While downloading the serial order is maintained and it is decoded at client’s end.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Flask", "API"],
      links: [
        {
          url: "https://github.com/vinay-deshmukh/Limitless-Client",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Finance Assistant Chatbot",
      cardDetailedText: [
        "Created a chatbot for Fin-tech companies for helping students regarding finances.",
        "Tech stack comprises of Django, Rasa NLU and Postgresql.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Django", "Rasa"],
      links: [
        {
          url: "https://github.com/Sitanshuk/HackPython",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Text Summarization",
      cardDetailedText: [
        "It summarizes the given text into number of sentences or words in English and Punjabi.",
        "Created in Flask and deployed on Google App Engine.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "GCP"],
      links: [
        {
          url: "https://github.com/bhushan-borole/text-summarization",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Meeting App",
      cardDetailedText:
        "This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",
      technologies: ["HTML", "CSS", "JS", "PHP"],
      links: [
        {
          url: "https://github.com/bhushan-borole/meeting-app",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Justalk",
      cardDetailedText: "A chat application made using React and Firebase Auth",
      technologies: ["React JS", "Firebase"],
      links: [
        {
          url: "https://github.com/bhushan-borole/justalk",
          text: "View Source Code",
        },
        {
          url: "https://bhushan-borole.github.io/justalk/",
          text: "View Demo",
        },
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
