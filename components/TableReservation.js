import { Table } from "react-bootstrap";
import ReservationItem from "./ReservationItem";
const TableReservation = ({ reservation, games }) => {
  return (
    <Table className="pr-2">
      <thead className="thead-dark text-center">
        <tr>
          
          <th scope="col">Horario</th>
          <th scope="col">Dia</th>
          <th scope="col">People</th>
          <th scope="col">Games</th>
        </tr>
      </thead>
      <tbody>
        {reservation.map(({ id, horario, day, peopleCapacity }) => (
          <ReservationItem
            key={id}
            idR={id}
            horario={horario}
            day={day}
            peopleCapacity={peopleCapacity}
            games={games}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default TableReservation;
