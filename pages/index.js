import { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });

  const apiPost = () => {
    axios
      .post(`http://localhost:8080/users/login`, data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.role === "USER") {
          router.push("/profile");
        } else if (res.data.role === "ADMI") {
          router.push("/profileAdmin");
        } else {
          router.push("/SignUp");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
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
      <section className={styles.body}>
        <Container>
          <main className="d-flex align-items-center min-vh-100 py-md-0">
            <Container>
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
                          style={{ height: "7em" }}
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
                            required
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
                            required
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
      </section>
    </>
  );
}
