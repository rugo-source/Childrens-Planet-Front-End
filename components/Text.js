import { Container, CardColumns, Card } from "react-bootstrap";
import styles from "../styles/Hero.module.css";
const Text = () => {
  return (
    <>
      <Container>
        <Card>
          <CardColumns>
            <Card.Img variant="top" src="/about.jpg" />
            <Card.Body>
              <Card.Title>About US</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
          </CardColumns>
        </Card>
      </Container>
    </>
  );
};
export default Text;
