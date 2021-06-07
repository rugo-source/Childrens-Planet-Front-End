const ReservationItem = ({ idR, horario, day, peopleCapacity, games }) => {
  return (
    <>
      <tr>
        <td> {horario}</td>
        <td> {day}</td>
        <td> {peopleCapacity}</td>
        <td>
          {games.map(({ names, reservationId }) =>
            idR == reservationId ? <p> {names}</p> : null
          )}
        </td>
      </tr>
    </>
  );
};
export default ReservationItem;
