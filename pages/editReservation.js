import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import axios from "axios";
import NavBar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";

const EditReservation = () => {
  const [games, setGames] = useState([]);
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [Hora, setHora] = useState(setHours(setMinutes(new Date(), 0), 16));
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    }else{
      axios
        .get("http://localhost:8080/games/games")
        .then((res) => {
          setGames(res.data);
        })
        .catch((error) => console.log(error.response.data));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Container className="d-flex justify-content-center p-4 py-0">
        <Row className="p-4 py-0">
          <Card className="p-4 py-0">
            <Card.Body>
              <Card.Title>
                <h2 className="form-title"> Edit Reservation</h2>
              </Card.Title>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} name="hora">
                    <Form.Label htmlFor="inlineFormCustomSelectPref">
                      Horario de apartado
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
                  <Form.Group as={Col} name="fecha">
                    <Form.Label htmlFor="inlineFormCustomSelectPref">
                      Fechas de apartado
                    </Form.Label>
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      filterDate={isWeekday}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} c>
                    <Form.Label>Tamaño de grupo</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="peopleCapacity"
                      min="1"
                      max="30"
                      //onChange={handleChangeAddress}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>Tabla juegos</Form.Label>
                    <TableGames games={games} />
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
export default EditReservation;
