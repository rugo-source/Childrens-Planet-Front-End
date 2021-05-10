import { Carousel, Image } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          style={{ height: "100vh" }}
          className="d-block w-100"
          src="ludoteca.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenido</h3>
          <p>Este es la gran oportunidad para hacer crecer a tus hijos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "100vh" }}
          className="d-block w-100"
          src="ludoteca2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Con Nosotros</h3>
          <p>Un sin fin de juegos para tus hijos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "100vh" }}
          className="d-block w-100"
          src="ludoteca3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Crece,Aprende,Juega</h3>
          <p>No pierdad esta oportunidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
