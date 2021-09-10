import SchoolIcon from "@material-ui/icons/School";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
    const items = [
        {
            cardTitle: "Trinity College Dublin",
            cardSubtitle: "MSc - Intelligent Systems",
            date: "2021 - present",
        },
        {
            cardTitle: "St. Francis Institute Of Technology",
            cardSubtitle: "BE in Computer Engineering",
            cardDetailedText: "CGPA: 8.72",
            date: "2016 - 2020",
        },
        {
            cardTitle: "Pace Jr. Science College",
            cardSubtitle: "12th",
            cardDetailedText: "CGPA: 86%",
            date: "2014 - 2016",
        },
        {
            cardTitle: "Gundecha Education Academy",
            cardSubtitle: "10th",
            cardDetailedText: "CGPA: 92.5%",
            date: "2014",
        },
    ];

    return (
        <section id="education" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Education</h2>
                </div>

                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <VerticalTimeline className="custom-line">
                            {items.map((data, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: "#343a40" }}
                                    date={data.date}
                                    dateClassName="timeline-date"
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid  rgb(33, 150, 243)",
                                    }}
                                    iconStyle={{
                                        background: "#0563bb",
                                        color: "#fff",
                                    }}
                                    icon={<SchoolIcon />}
                                >
                                    <h3
                                        className="vertical-timeline-element-title"
                                        style={{
                                            fontSize: "14",
                                            color: "rgba(255, 255, 255, 0.8)",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </h3>
                                    <h4
                                        className="vertical-timeline-element-subtitle"
                                        style={{
                                            fontSize: "1.2em",
                                            fontWeight: "350",
                                            color: "#7e8890",
                                        }}
                                    >
                                        {data.cardSubtitle}
                                    </h4>
                                    <p style={{ color: "#74808a" }}>
                                        {data.cardDetailedText}
                                    </p>
                                </VerticalTimelineElement>
                            ))}
                            <VerticalTimelineElement
                                iconStyle={{
                                    background: "#0563bb",
                                    color: "#fff",
                                }}
                                icon={<StarIcon />}
                            />
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
