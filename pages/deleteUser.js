import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NavBarOne from "../components/Navbar.Admin";
import TableUser from "../components/TableUser";


const DeleteUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users/users/p")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  return (
    <>
      <NavBarOne />
      <Container className="d-flex align-items-center p-5">
        <Container className="m-5 ">
          <Row>
            <Col className="table-responsive" md={4} lg={12}>
              <TableUser users={user} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default DeleteUser;
