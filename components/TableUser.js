import {
    Table
  } from "react-bootstrap";
  import UserItem from "./UserItem";
const TableUser = ({users}) => {
    
    return (
      <Table   id="home">
        <thead className="thead-dark text-center">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Domicilio</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Delete</th>
            
          </tr>
        </thead>
        <tbody>
         {users.map(
            ({ name, domicilio, email, age}) => (
              <UserItem
                name={name}
                domicilio={domicilio}
                email={email}
                age={age}
               
              />
            )
          )}
        </tbody>
      </Table>
    );
  };
  export default TableUser;