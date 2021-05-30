import { Table } from "react-bootstrap";
import UserItem from "./UserItem";
const TableReservation = ({info}) => {
  return (
    <Table className="pr-2">
      <thead className="thead-dark text-center">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Horario</th>
          <th scope="col">Dia</th>
          <th scope="col">People</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {info.map(({ id,horario , day, peopleCapacity }) => (
          <UserItem
            key={id}
            id={id}
            horario={horario}
            day={day}
            peopleCapacity={peopleCapacity}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default TableReservation;
