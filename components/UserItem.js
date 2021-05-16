import { Button } from "react-bootstrap";
const UserItem = ({ name, domicilio, email, age }) => {
  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <>
      <tr>
        <td> {name}</td>
        <td> {domicilio}</td>
        <td> {email}</td>
        <td> {age}</td>
        <td>
          <Button variant="danger" onClick={handleSubmit}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
export default UserItem;
