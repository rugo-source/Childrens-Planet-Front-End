import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBarOne from "../components/Navbar.Admin";
import TableUser from "../components/TableUser";

const DeleteUser = () => {
  const [user, setUser] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    } else {
      axios
        .get("http://localhost:8080/users/users/USER")
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => console.log(error.response.data));
    }
  }, []);
  return (
    <>
      <NavBarOne />
      <Container className="d-flex align-items-center p-5">
        <Container className="m-5 ">
          <Row>
            <Col md={4} lg={12}>
              <Card className="table-responsive">
                <Card.Body>
                  <TableUser users={user} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default DeleteUser;
