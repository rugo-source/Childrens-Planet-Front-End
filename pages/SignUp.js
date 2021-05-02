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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SignUp = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="main">
      <Card>
        <Container className="d-flex justify-content-center">
          <Card.Body>
            <Card.Title>
              <h2 className="form-title">Create account</h2>
            </Card.Title>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="fistname" placeholder="First name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="lastname" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
              Birthday
              </Form.Label>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address </Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
};
export default SignUp;
