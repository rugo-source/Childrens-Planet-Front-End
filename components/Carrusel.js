import { Carousel, Image } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          style={{ height: "95vh" }}
          className="d-block w-100"
          src="ludoteca.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "95vh" }}
          className="d-block w-100"
          src="ludoteca2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "95vh" }}
          className="d-block w-100"
          src="ludoteca3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
