import { Container, Button, Card } from "react-bootstrap";
import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={styles.banner}>
        <Container className={styles.container}>
          <div className={styles.bannertext}>
            <div className={styles.bannerheading}>Glad to see you here !</div>
            <div className={styles.bannersubheading}>
              Here goes the secondary heading on hero banner
            </div>
            <div className={styles.middle}>
              <Button type="button" className={styles.btnbanner}>
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.textintro}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
      </Container>
    </>
  );
};
export default Hero;
