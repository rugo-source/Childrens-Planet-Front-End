import { Button } from "react-bootstrap";
const GamesItem = ({ id, names, category, amount }) => {
  const handleSubmit = () => {
    console.log(id);
  };

  return (
    <>
      <tr>
        <td> {id}</td>
        <td> {names}</td>
        <td> {category}</td>
        <td> {amount}</td>
        <td>
          <Button variant="danger" onClick={handleSubmit}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
export default GamesItem;
