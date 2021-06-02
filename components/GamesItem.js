import { Form } from "react-bootstrap";
const GamesItem = ({ id, names, category, amount, signUp, Change ,checked }) => {
  return (
    <>
      <tr>
        <td> {id}</td>
        <td> {names}</td>
        <td> {category}</td>
        <td> {amount}</td>
        {signUp ? (
          <Form.Control type="checkbox" name={names} onChange={Change} checked={checked}/>
        ) : null}
      </tr>
    </>
  );
};
export default GamesItem;
