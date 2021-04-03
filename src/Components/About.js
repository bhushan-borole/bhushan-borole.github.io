import img from './images/bhushan.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img src={img} height="400" width="300" style={{ borderRadius: "50%" }} />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Developer.</h3>
            <br></br>
            <p style={{color: "#728394"}}>A passionate Full Stack Developer, Competitive Programmer, ML enthusiast and Tabla player.</p>
            <br></br>
            <p style={{color: "#728394"}}>
              Always seeking challenging position in and Organization where my skills find ample of oppurtunities for upgradation and growth of the company.
            </p>
            <br></br>
            <Row>
              <Col lg={6}>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9869140782</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Mumbai, Maharashtra, India</span></li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>borolebhushan8@gmail.com</span></li>
                </ul>
              </Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}