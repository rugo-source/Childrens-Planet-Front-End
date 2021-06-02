import { Table } from "react-bootstrap";
import GamesItem from "./GamesItem";
const TableGames = ({ games, signup, Change,checked,data }) => {
  return (
    <Table className="table table-hover" id="home">
      <thead className="thead-dark text-center">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Names</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
          {signup ? <th scope="col"> Select </th> : null}
        </tr>
      </thead>
      <tbody>
        {games.map(({ id, names, category, amount }) => (
          <GamesItem
            id={id}
            names={names}
            category={category}
            amount={amount}
            signUp={signup}
            Change={Change}
            checked={hecked}
            
          />
        ))}
      </tbody>
    </Table>
  );
};
export default TableGames;
