import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Card, Image, Form, Alert } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";
export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState();

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
        setError(error.response.data);
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
                        Iniciar sesión
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
                            placeholder="example@example.com"
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
                        {error ? (
                          <div
                            className="alert alert-warning alert-dismissible fade show"
                            role="alert"
                          >
                            <strong>{error.error}</strong>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        ) : null}
                        <Form.Control
                          name="login"
                          id="login"
                          className={styles.loginbtn}
                          mb={4}
                          type="submit"
                          value="Ingresar"
                        />
                      </Form>
                      <Card.Text className={styles.logincardfootertext}>
                        No tienes una cuenta?
                        <Link href="/SignUp" className="text-reset">
                          Registrate aquí
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
