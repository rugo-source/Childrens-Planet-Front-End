import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import axios from "axios";
import NavBar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import TableGames from "../components/TableGames";
import Text from "../components/Text";
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
      <Carrusel />
      
      <Text />
      <section className="d-flex align-items-center p-4" >
   
        <Container>
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
      </section>
    </>
  );
};
export default Profile;
