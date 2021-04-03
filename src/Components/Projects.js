import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

const Projects = () => {
  const items = [
    {
      cardTitle: "Woyse - A Multilingual Entity Recognition System",
      cardDetailedText: "Build an end-to-end intent and entity recognition microservice in Django using the concepts of Natural Language Understanding (NLU) and Natural Language Processing (NLP) to support multilingual conversations in Hindi and English and Gujrati.",
      technologies: ["Python", "Django", "Rasa"],
      links: []
    },
    {
      cardTitle: "Limitless File Sharing App",
      cardDetailedText: "This is a file sharing app which exploits the resources of Google Sheets. You can share ANY amount of data from one system to another. This app was created in TSEC-Codecell hackathon, and we came under Top 10 teams amongst approximately 50 teams.",
      technologies: ["Python", "Flask", "API"],
      links: [{
        url: "https://github.com/vinay-deshmukh/Limitless-Client",
        text: "View Source Code"
      }]
    },
    {
      cardTitle: "Finance Assistant Chatbot",
      cardDetailedText: "Created a ChatBot for Fin-tech Companies in a hackathon. The tech stack comprises of Django, Rasa NLU and Postgresql. We also added the bot with the functionality of web scraping using Scrapy, such that is a customer is provided with a relative link of the website.",
      technologies: ["Python", "Django", "Rasa"],
      links: [{
        url: "https://github.com/Sitanshuk/HackPython",
        text: "View Source Code"
      }]
    },
    {
      cardTitle: "Text Summarization",
      cardDetailedText: "It was created as a mini project for our college. The tech-stack used is Flask. The summarization is done for 2 languages English and Punjabi, where language is auto detected. The whole web app is hosted on Google App Engine.",
      technologies: ["Python", "GCP"],
      links: [
        {
          url: "https://github.com/bhushan-borole/text-summarization",
          text: "View Source Code"
        },
        {
          url: "https://text-summarization-ccl-265717.appspot.com/",
          text: "View Demo"
        }
      ]
    },
    {
      cardTitle: "Meeting App",
      cardDetailedText: "This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",
      technologies: ["HTML", "CSS", "JS", "PHP"],
      links: [{
        url: "https://github.com/bhushan-borole/meeting-app",
        text: "View Source Code"
      }]
    },
    {
      cardTitle: "Justalk",
      cardDetailedText: "A chat application made using React and Firebase Auth",
      technologies: ["React JS", "Firebase"],
      links: [
        {
          url: "https://github.com/bhushan-borole/justalk",
          text: "View Source Code"
        },
        {
          url: "https://bhushan-borole.github.io/justalk/",
          text: "View Demo"
        }
    ]
    }
  ]

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  }

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  }

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
              {
                items.slice(0, limit).map((data, i) => (
                    <VerticalTimelineElement
                      key={i}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#343a40' }}
                      dateClassName="timeline-date"
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      icon={<CodeIcon />}
                      iconStyle={{ background: '#0563bb', color: '#fff' }}
                    >
                      <div className="projects-technologies">
                        {
                          data.technologies.map((name, i) => (
                              <Chip key={i} label={name}></Chip>
                          ))
                        }
                      </div>
                      <h3 
                        className="vertical-timeline-element-title"
                        style={{ fontSize: "12", color: "rgba(255, 255, 255, 0.8)" }}>
                          {data.cardTitle}
                      </h3>
                      <p style={{ color: "#74808a" }}>
                        {data.cardDetailedText}
                      </p>
                      <div className="project-links">
                        {
                          data.links.map((link, j) => (
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
                          ))
                        }
                      </div>
                    </VerticalTimelineElement> 
                  )
                )
              }
              {
                loadButton && <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon style={{ color: "#fff", marginTop: "0.1px" }} />
                    </IconButton>
                  }
                  iconStyle={{ background: '#0563bb', color: '#fff'}}
                />
              }
              {
                lessButton && <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon style={{ color: "#fff", marginTop: "0.1px" }} />
                    </IconButton>
                  }
                  iconStyle={{ background: '#0563bb', color: '#fff'}}
                />
              }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;