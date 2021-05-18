import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import NavBar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";
const EditUser = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    domicilio: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    console.log(address);
    /* axios
      .post(`http://localhost:8080/users/registro`, data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        // delay
        router.push("/profile");
      })
      .catch((error) => {
        console.log(error.response.data);
        //useState error
      }); */
  };
  const handleChangeAddress = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
    setData({
      ...data,
      domicilio: `${address.address} ${address.city} ${address.state} ${address.zip}`,
    });
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    } else {
    setData({
      ...data,
      age: moment(startDate).format("L"),
    });
  }
  }, [startDate]);
  return (
    <>
      <NavBar />
      <Container className="d-flex justify-content-center  py-0">
        <Row className="p-4 py-0">
          <Card className="p-4 py-0">
            <Card.Body>
              <Alert variant="warning" className="p-3 m-2">
                Debes de introducir toda la informacion en address.
              </Alert>
              <Card.Title>
                <h2 className="form-title">Edit account</h2>
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
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
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
                    required
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address </Form.Label>
                  <Form.Control
                    name="address"
                    placeholder="1234 Main St"
                    required
                    onChange={handleChangeAddress}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      name="city"
                      onChange={handleChangeAddress}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="state"
                      onChange={handleChangeAddress}
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
                      required
                      type="number"
                      name="zip"
                      onChange={handleChangeAddress}
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
export default EditUser;
