import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/Navbar";
import TableReservation from "../components/TableReservation";
const ViewReservation = () => {
  const [info, setInfo] = useState([]);
  const [reservation, setReservation] = useState();
  const [table, setTable] = useState();
  useEffect(async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    } else {
      const data = await axios.post(
        `http://localhost:8080/resev/reservations/${user.email}`
      );
      const algo = await action(data);
    }
  }, []);
  const action = async (data) => {
    setInfo(data.data);
  };
  useEffect(() => {
    console.log("hola");
    console.log(info);
    setReservation(info.reservation);
    setTable(info.table);
  }, [info]);
  useEffect(() => {
    console.log(reservation);
  }, [reservation]);
  useEffect(() => {
    console.log(table);
  }, [table]);
  return (
    <>
      <NavBar />
      <Container className="d-flex align-items-center p-5">
        <Row className="d-flex m-5">
          {!reservation ? (
            <p> No hay reservation</p>
          ) : (
            <TableReservation reservation={reservation} games={table} />
          )}
        </Row>
      </Container>
    </>
  );
};
export default ViewReservation;
