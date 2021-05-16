const UserItem = ({ name, domicilio, email, age}) => {
  return (
    <>
      <tr>
        <td> {name}</td>
        <td> {domicilio}</td>
        <td> {email}</td>
        <td> {age}</td>
        <td></td>
      </tr>
    </>
  );
};
export default UserItem;
