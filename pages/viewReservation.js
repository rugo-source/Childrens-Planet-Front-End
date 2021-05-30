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
import NavBar from "../components/Navbar";
import TableReservation from "../components/TableReservation";
const ViewReservation = () => {
  const [info, setInfo] = useState([]);
  return (
    <>
      <NavBar />
      <Container className="d-flex align-items-center p-5">
        <Row className="d-flex m-5">
          <TableReservation info={info} />
        </Row>
      </Container>
    </>
  );
};
export default ViewReservation;
