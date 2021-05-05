import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import moment from "moment";
import NavBar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
  });
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
    
      <Container className="d-flex justify-content-center p-4 py-0">
        <Row className="p-4 py-0">
          <Card className="p-4 py-0">
            <Card.Body>
              <Card.Title>
                <h2 className="form-title">Create account</h2>
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Name</Form.Label>
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
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address </Form.Label>
                  <Form.Control
                    name="address"
                    placeholder="1234 Main St"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      onChange={handleChange}
                    >
                      {Countries.map((countries) =>
                        countries === "" ? (
                          <option key={countries} value={countries}>
                            --Seleccione una--
                          </option>
                        ) : (
                          <option
                            key={countries}
                            name="state"
                            value={countries}
                          >
                            {countries}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="number"
                      name="zip"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form.Row>

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
export default SignUp;
