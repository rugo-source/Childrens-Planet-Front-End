import { Table } from "react-bootstrap";7
import GamesItem from "./GamesItem";
const TableGames = ({games}) => {
  return (
    <Table className="table table-hover" id="home">
      <thead className="thead-dark text-center">
        <tr>
          <th scope="col">Id</th>
          <th scope="col"> Names</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
    
        </tr>
      </thead>
      <tbody>
        {games.map(
          ({ id, names, category, amount }) => (
            <GamesItem
              id={id}
              names={names}
              category={category}
              amount={amount}
            />
          )
        )}
      </tbody>
    </Table>
  );
};
export default TableGames;
