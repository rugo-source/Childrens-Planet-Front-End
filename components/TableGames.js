const TableGames = () => {
  const data={
    category:

  }
  return (
    <table className="table table-hover" id="home">
      <thead className="thead-dark text-center">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col"> Email</th>
          <th scope="col">Licencia</th>
          <th scope="col">Zona de Pesca</th>
          <th scope="col"> Club de Pesca </th>
          <th scope="col">Estatus</th>
          <th scope="col"> Responder </th>
          <th scope="col"> Aceptar </th> w q
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ Username, email, licenseFishing, fishing, status, clubName }) => (
            <UserItem
              Username={Username}
              email={email}
              licenseFishing={licenseFishing}
              fishing={fishing}
              status={status}
              clubName={clubName}
            />
          )
        )}
      </tbody>
    </table>
  );
};
export default TableGames;
