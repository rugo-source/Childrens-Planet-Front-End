import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import moment from "moment";
import NavBar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";
const SignUpReservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
    return (
      <>
      <Container className="d-flex justify-content-center p-4 py-0">
      <Row className="p-4 py-0">
        <Card className="p-4 py-0">
          <Card.Body>
            <Card.Title>
              <h2 className="form-title">Create Reservation</h2>
            </Card.Title>
            <Form >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Horario</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="First name"
                    required
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    min={8}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Birthday
              </Form.Label>
              <Form.Group name="date">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  withPortal
                  onChange={date => setStartDate(date)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </>
 
    );
 };
 export default SignUpReservation;