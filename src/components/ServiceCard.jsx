import { Card } from "react-bootstrap";

export default function ServiceCard(props) {
    return (
    <Card className="w-1">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
    );
}