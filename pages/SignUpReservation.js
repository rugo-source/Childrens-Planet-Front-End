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
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
const SignUpReservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [Hora, setHora] = useState(setHours(setMinutes(new Date(), 0), 16));
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };

  return (
    <>
    <NavBar/>
      <Container className="d-flex justify-content-center p-4 py-0">
        <Row className="p-4 py-0">
          <Card className="p-4 py-0">
            <Card.Body>
              <Card.Title>
                <h2 className="form-title">Create Reservation</h2>
              </Card.Title>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} name="hora">
                    <Form.Label
                      className="my-1 mr-2"
                      htmlFor="inlineFormCustomSelectPref"
                    >
                      Horario{" "}
                    </Form.Label>
                    <DatePicker
                      selected={Hora}
                      onChange={(date) => setHora(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={60}
                      timeCaption="Time"
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 10),
                        setHours(setMinutes(new Date(), 0), 11),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 0), 13),
                        setHours(setMinutes(new Date(), 0), 14),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 0), 16),
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 0), 18),
                      ]}
                      dateFormat="h:mm aa"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} name="fecha">
                    <Form.Label>Fecha</Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Label
                  className="my-1 mr-2"
                  htmlFor="inlineFormCustomSelectPref"
                >
                  Fecha
                </Form.Label>
                <Form.Group name="date">
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    filterDate={isWeekday}
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
