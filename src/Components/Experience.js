import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';

export default function Experience() {

  const items = [
    {
      date: "November 2020 – February 2020",
      cardTitle: "Mobisy Technologies",
      cardSubtitle: "R & D Intern",
      cardDetailedText: "Working as a Research and Development intern and helping the company reach its goals using NLP and Machine Learning."
    },
    {
      date: "September 2019 – October 2019",
      cardTitle: "Techskills IT Consultants",
      cardSubtitle: "Backend Developer - Spring, JPA, Hibernate",
      cardDetailedText: "Worked as a freelance back-end developer and converted the entire database dependent system to database independent system using JPA and Hibernate Stack."
    },
    {
      date: "June 2019 – July 20190",
      cardTitle: "Fox Domotics Private Limited",
      cardSubtitle: "Machine Learning Intern",
      cardDetailedText: "Worked on Google play apps analytics. Applied Knowledge Data Discovery on the dataset and provided the company with various insights."
    },
    {
      date: "August 2018 – January 2019",
      cardTitle: "TechSkills IT Consultants",
      cardSubtitle: "Fullstack Developer Intern",
      cardDetailedText: "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend."
    }
  ]

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
            {
              items.map((data, i) => {
                return (
                    <VerticalTimelineElement
                      key={i}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#343a40' }}
                      date={data.date}
                      dateClassName="timeline-date"
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      iconStyle={{ background: '#0563bb', color: '#fff' }}
                      icon={<WorkIcon />}>
                        <h3 
                          className="vertical-timeline-element-title"
                          style={{ fontSize: "14", color: "rgba(255, 255, 255, 0.8)" }}>
                            {data.cardTitle}
                        </h3>
                        <h4 
                          className="vertical-timeline-element-subtitle"
                          style={{ fontSize: "1.2em", fontWeight: "350", color: "#7e8890" }}
                          >
                            {data.cardSubtitle}
                        </h4>
                        <p style={{ color: "#74808a" }}>
                          {data.cardDetailedText}
                        </p>
                    </VerticalTimelineElement>
                );
              })
            }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}