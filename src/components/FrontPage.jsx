import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ServiceCard from "./ServiceCard";
import Contact from "./Contact";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

export default function FrontPage() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div style={{ display: "block" }}>
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#4DA1A9",
                }}
              >
                Dr. Abhik Ray
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "500",
                  color: "#4DA1A9",
                }}
              >
                M.B.B.S., M.S. (Othopaedics)
              </p>
            </div>
          </Col>
          <Col>
            <Image src="doctor.png" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container className="justify-content-end">
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "36px", fontWeight: "700", color: "#4DA1A9" }}
        >
          About the team
        </p>
        <Row>
          <Col sm={8}>
            <p
              className="d-flex justify-content-center"
              style={{ fontSize: "24px" }}
            >
              We are among the leading providers of joint replacement surgery in
              Kolkata, India. Dr. Abhik Ray specializes in treating
              comprehensive joint-related conditions, including hip, knee,
              shoulder, and elbow disorders, through both non-surgical and
              surgical approaches. All treatments are conducted following the
              latest evidence-based international standards.
            </p>
          </Col>
          <Col sm={4}>
            <Card
              style={{ width: "18rem" }}
              className="shadow p-3 mb-5 bg-white rounded"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, color: "#4DA1A9" }}>
                  Emergency Contact
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp; +91-8927815745
                  <hr />
                  We provide 24/7 emergency support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ height: "8rem", flexDirection: "column" }}
        className="d-flex justify-content-end"
      >
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "36px", fontWeight: "700", color: "#4DA1A9" }}
        >
          Treatments Available
        </p>
      </Container>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <ServiceCard src="UKR.png" title="Partial Knee Replacement (UKR)" />
          </Col>
          <Col md={6} lg={3}>
            <ServiceCard src="shoulder.png" title="Shoulder Replacement" />
          </Col>
          <Col md={6} lg={3}>
            <ServiceCard src="TKR.png" title="Total Knee Replacement (TKR)" />
          </Col>
          <Col md={6} lg={3}>
            <ServiceCard src="arthroscopy.png" title="Knee Arthroscopy" />
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <ServiceCard src="revision.png" title="Knee Revision" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <ServiceCard src="elbow.png" title="Elbow Replacement" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <ServiceCard src="trauma.png" title="Advanced Trauma" />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <ServiceCard src="hip.png" title="Hip Replacement" />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ height: "8rem", flexDirection: "column" }}
        className="d-flex justify-content-end"
      >
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "36px", fontWeight: "700", color: "#4DA1A9" }}
        >
          Certified Associates
        </p>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Contact
              src="roshan.jpg"
              name="Roshan Mondal"
              contact="+918927815745"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Contact
              src="somnath.jpeg"
              name="Somnath Ghosh"
              contact="+918927815745"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
