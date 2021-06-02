import { Container, CardColumns, Card} from "react-bootstrap";
import styles from "../styles/Hero.module.css";
const Text = () => {
  return (
    <>
      <Container>
        <Card>
          <CardColumns>
            <Card.Img variant="top" src="/about.jpg" />
            <Card.Body>
              <Card.Title>Acerca de nosotros</Card.Title>
              <Card.Text>
              Es una ludoteca gratuita donde los niños pasan un momento agradable mientras
              desarrollan sus habilidades con base a distintos juegos.  
              </Card.Text>
            </Card.Body>
          </CardColumns>
        </Card>
      </Container>
    </>
  );
};
export default Text;
