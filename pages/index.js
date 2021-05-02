import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
export default function Home() {
  const [data, setData] = useState({ email: "", password: "" });

  const apiPost = () => {
    axios
      .post(`http://localhost:8080/`, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.log(err.response.data);
      });
  };
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    apiPost();
  };
  return (
    <>
    <NavBar/>
    <body className={styles.body}>
      <Container>
        <main className="d-flex align-items-center min-vh-100 py-md-0">
          <Container className="p-1 m-4">
            <Card className={styles.logincard}>
              <Row className="no-gutters">
                <Col md={5}>
                  <Image
                    src="/login.jpg"
                    alt="login"
                    className={styles.loginimg}
                  />
                </Col>
                <Col md={7}>
                  <Card.Body className={styles.logincardbody}>
                    <div className={styles.brandwrapper}>
                      <Image
                        src="/chil.svg"
                        alt="logo"
                        style={{ height: "8em" }}
                        className={styles.brandwrapper}
                      />
                    </div>
                    <Card.Text className={styles.logincarddescription}>
                      Sign into your account
                    </Card.Text>
                    <Form
                      className={styles.logincardform}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className={styles.formgroup}>
                        <Form.Label htmlFor="email" className="sr-only">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          id="email"
                          className={styles.formgroup}
                          placeholder="Email address"
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                      <Link href="/SignUp" className="text-reset">
                        Register here
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </main>
      </Container>
    </body>
    </>
  );
}
