import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <p
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginTop: "36px",
            color: "#4DA1A9",
          }}
        >
          Dr. Abhik Ray | The Best Orthopaedic Surgeon In Kolkata
        </p>
      </Container>
      <br />
      <Container className="d-flex flex-column align-items-center">
        <iframe
          width="960"
          height="640"
          src="https://www.youtube.com/embed/KI80HoLNYrM?si=_vX5YyMNjsSA3abi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <br />
        <br />
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "36px", fontWeight: "700", color: "#4DA1A9" }}
        >
          Few words from the Doctor
        </p>
        <p style={{ fontSize: "24px" }}>
          Dr. Abhik Ray is a highly qualified orthopaedic surgeon practicing in
          Kolkata, with more than ten years of experience and expertise in joint
          replacement surgeries. Throughout his career, Dr. Abhik Ray has
          successfully diagnosed and treated over 2,500 patients. After
          completing his M.S. in Orthopaedics from R.G. Kar Medical College,
          Kolkata, Dr. Ray trained under renowned surgeon Dr. Arun Mullaji,
          obtaining his fellowship in joint replacement surgery from The Breach
          Candy Hospital in Mumbai. His commitment to advancing his expertise in
          hip replacement and trauma surgeries led him to pursue additional
          fellowships at the Istituto Ortopedico Galeazzi, Milan, and The Guro
          Institute, Seoul, South Korea. With his comprehensive expertise in
          complex trauma, sports and spinal injuries, and joint replacement
          surgeries, Dr. Ray has established himself as one of Kolkata's most
          distinguished orthopaedic surgeons. He employs evidence-based
          non-surgical and surgical treatment methods that align with
          international standards and incorporate the latest research. His
          special interest in osteoarthritis management, combined with his
          extensive experience in treating various bone and joint conditions,
          makes him a highly sought-after specialist in the field.
        </p>
      </Container>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-end">
            <img src="signature.png" alt="doctor-signature" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
