import { Card } from "react-bootstrap";

export default function ServiceCard(props) {
  return (
    <div style={{ width: "fit-content" }}>
      <Card className="shadow mb-4 bg-white rounded">
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            {props.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
