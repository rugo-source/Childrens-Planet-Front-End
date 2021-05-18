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

import axios from "axios";
import NavBar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import TableGames from "../components/TableGames";
import Text from "../components/Text";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
  const [games, setGames] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    } else {
      axios
        .get("http://localhost:8080/games/games/p")
        .then((res) => {
          setGames(res.data);
        })
        .catch((error) => console.log(error.response.data));
    }
  }, []);
  return (
    <>
      <NavBar />
      <Carrusel />
      
      <Text />
      <Container className="d-flex align-items-center p-5">
        <Container className="m-5 ">
          <Row>
            <Col md={4} lg={12}>
              <Card className="table-responsive">
                <Card.Title> Disponibilidad</Card.Title>
                <Card.Body>
                  <TableGames games={games} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Profile;
