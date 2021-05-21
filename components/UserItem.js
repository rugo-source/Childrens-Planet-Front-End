import { Button } from "react-bootstrap";
import { State,useState } from "react";
import axios from "axios";
const UserItem = ({ name, domicilio, email, age }) => {
  const handleSubmit = () => {
    console.log(email);

    axios
      .post(`http://localhost:8080/users/delete/${email}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
        //useState error
      });
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
