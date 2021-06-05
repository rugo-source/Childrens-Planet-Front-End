import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
} from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/Navbar";
import TableReservation from "../components/TableReservation";
const ViewReservation = () => {
  const [info, setInfo] = useState([]);
  useEffect(async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
  if (!user) {
    router.push("/");
  } else { 
    
    const data = await axios.post (`http://localhost:8080/resev/reservations/${user.email}`)
    const algo = await action(data);
  
  }
}, []);
const action = async (data) =>{setInfo(data.data)}
 useEffect(()=>{
 console.log("hola");
 console.log(info);
 },[info]);
  return (
    <>
      <NavBar />
      <Container className="d-flex align-items-center p-5">
        <Row className="d-flex m-5">
         {/* <TableReservation info={info.reservation} /> */}
        </Row>
      </Container>
    </>
  );
};
export default ViewReservation;
