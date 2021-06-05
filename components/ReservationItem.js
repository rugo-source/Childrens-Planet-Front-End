import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
const ReservationItem = ({ id,horario , day, peopleCapacity  }) => {
  return (
    <>
      <tr>
        <td> {id}</td>
        <td> {horario}</td>
        <td> {day}</td>
        <td> {peopleCapacity}</td>
      </tr>
    </>
  );
};
export default ReservationItem;
