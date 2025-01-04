import { Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function Contact(props) {
    return (
        <Card style={{width: "16rem", borderColor: "white"}}>
          <Card.Img variant="top" src={props.src} style={{borderRadius: "50%"}}/>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{props.name}</Card.Title>
            <Button variant="primary" onClick={()=>alert("Ph: "+props.contact)}>Contact</Button>
          </Card.Body>
        </Card>
    );
}