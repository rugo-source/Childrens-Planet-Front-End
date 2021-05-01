import { Container,Row,Col,Card,Image, Form, Button} from 'react-bootstrap';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container >
      <main className="d-flex align-items-center min-vh-100 p-4 py-md-0">
        <Container>
          <Card className={styles.logincard}>
            <Row className="no-gutters">
              <Col md={5}>
                <Image src="/login.jpg" alt="login" className={styles.loginimg} />
              </Col>
              <Col md={7}>
                <Card.Body className={styles.logincardbody}>
                  <div className={styles.brandwrapper}>
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      className={styles.brandwrapper}
                    />
                  </div>
                  <Card.Text className={styles.logincarddescription}>
                    Sign into your account
                  </Card.Text>
                  <Form >
                    <Form.Group className={styles.formgroup}>
                      <Form.Label htmlFor="email" className="sr-only">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        calassName={styles.formgroup}
                        placeholder="Email address"
                      />
                    </Form.Group>
                    <Form.Group className={styles.formgroup} md={4}>
                      <Form.Label htmlFor="password" className="sr-only">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        className={styles.formgroup}
                        placeholder="***********"
                      />
                    </Form.Group>
                    <Form.Control
                    
                      name="login"
                      id="login"
                      className={styles.loginbtn}
                      mb={4}
                      type="submit"
                      value="Login"
                    />
                  </Form>
                  <Card.Text className={styles.logincardfootertext}>
                    Don't have an account?
                    <Card.Link href="#!" className="text-reset">
                      Register here
                    </Card.Link>
                  </Card.Text>
                 
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>
    </Container>
  );
}
