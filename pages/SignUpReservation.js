import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import TableGames from "../components/TableGames";
import NavBar from "../components/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import ObjectTransform from "../constants/ObjectTrasform";
import moment from "moment";

const SignUpReservation = () => {
  const signUp = "true";
  let places;
  const [user, setUser] = useState({});
  const [info, setInfo] = useState({
    email: "",
    horario: "",
    day: "",
    game: [],
    peopleCapacity: 0,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    "trompos de cuerdas": false,
    patines: false,
    pelota: false,
    yoyos: false,
    bolos: false,
    marinetas: false,
    diabolos: false,
    muñecas: false,
    "pistas de coche": false,
    vehiculos: false,
    karaoke: false,
    "juego de modelismo": false,
    "juegos de mesa clasicos": false,
    pelotas: false,
    monopatines: false,
    futboline: false,
    "cancha de futbol": false,
    "pinturas con caballete": false,
    "puzzles de hasta 500 piezas": false,
    "juegos de cartas coleccionables": false,
  });
  const [games, setGames] = useState([]);
  const router = useRouter();
  const [Hora, setHora] = useState(setHours(setMinutes(new Date(), 0), 16));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    console.log(places);

    console.log(info);
    axios
      .post("http://localhost:8080/resev/reservation", info)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));

    console.log(data);
  };
  const handleOnchange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };
  useEffect(() => {
    places = ObjectTransform(data);
    console.log(places);
    setInfo({
      ...info,
      game: places,
    });
  }, [data]);

  useEffect(() => {
    console.log("day");
    setInfo({
      ...info,
      day: moment(startDate).format("L"),
    });
  }, [startDate]);

  useEffect(() => {
    console.log("horario");
    setInfo({
      ...info,
      horario: moment(Hora).format("h:mm:ss a"),
    });
  }, [Hora]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setInfo({
      email: user.email,
    });
    if (!user) {
      router.push("/");
    } else {
      setUser(user);
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
                <h2 className="form-title">Create Reservation</h2>
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} name="hora">
                    <Form.Label>Horario de apartado</Form.Label>
                    <DatePicker
                      selected={Hora}
                      onChange={(date) => setHora(date)}
                      showTimeSelect
                      placeholderText="Click to select a timegit"
                      isClearable={true}
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
                    <Form.Label>Fechas de apartado</Form.Label>
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      filterDate={isWeekday}
                      isClearable={true}
                      placeholderText="Click to select a date"
                      
                    />
                   
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} c>
                    <Form.Label>Tamaño de grupo</Form.Label>
                    <Form.Control
                      required
                      placeholder="Enter your group size "
                      type="number"
                      name="peopleCapacity"
                      min="1"
                      max="30"
                      onChange={handleOnchange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="d-flex justify-content-sm-center">
                  <Form.Group>
                    <Form.Label>Tabla juegos</Form.Label>
                    <TableGames
                      Change={handleChange}
                      data={data}
                      games={games}
                      signup={signUp}
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
export default SignUpReservation;
