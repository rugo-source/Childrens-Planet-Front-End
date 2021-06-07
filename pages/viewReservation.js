import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row ,Col,Card} from "react-bootstrap";
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
        <Container className=" align-items-center p-2 ">
          <Row>
            <Col md={4} lg={12}>
              <Card className="table-responsive p-2 m-3">
                <Card.Body>
                  <Row className="d-flex ">
                    {!reservation ? (
                      <p> No hay reservation</p>
                    ) : (
                      <TableReservation
                        reservation={reservation}
                        games={table}
                      />
                    )}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default ViewReservation;
