import { Container } from "react-bootstrap";
import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <>
      <Container>
        <div className={styles.hero}>
          <div className="herimage">
            <div className="hero__image--overlay"></div>
            <div className="hero__child hero__child--primary animation--floating"></div>
            <div className="hero__child hero__child--secondary animation--floating"></div>
            <p className="hero__title animation--title-in">The flaming mountain</p>
            <p className="hero__subtitle animation--title-in">by John Blaine</p>
          </div>
        </div>
      </Container>
      <div className="section">
        <h2>A RICK BRANT SCIENCE-ADVENTURE STORY</h2>
        <hr></hr>
        <p className="section__text">
          Rock, melting like butter on a hot stove! It is hard to believe, but
          that is what happens on San Luz, a small island off the coast of South
          America. When Rick Brant and his pal Dan Scott fly to the famous
          resort island to join Rick's father, head of the Spindrift Scientific
          Foundation, a seemingly inactive volcano is about to explode in an
          eruption which could easily blow San Luz off the map.
        </p>
      </div>
    </>
  );
};
export default Hero;
