import { Form } from "react-bootstrap";
const GamesItem = ({ id, names, category, amount, signUp, Change }) => {
  return (
    <>
      <tr>
        <td> {id}</td>
        <td> {names}</td>
        <td> {category}</td>
        <td> {amount}</td>
        {signUp === "true" ? (
          <Form.Control type="checkbox" name={names} onChange={Change} />
        ) : null}
      </tr>
    </>
  );
};
export default GamesItem;
