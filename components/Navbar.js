import styles from "../styles/Navbar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
const NavBar = () => {
  return (
    <Navbar
      className="fixed-top shadow-lg"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Link href="/profile">
        <Navbar.Brand className="ml-lg-5">
          <a
            className="nav-link"
            //onClick={hola}
            style={{ outline: "0" }}
          >
            <img style={{ height: "2em" }} src={"/chil.svg"} />
          </a>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/profile">
            <a className="nav-link">Inicio </a>
          </Link>
          <NavDropdown title="Usuario" id="collasible-nav-dropdown">
            <Link href="/editUser">
              <a className="dropdown-item">Edit User</a>
            </Link>

            <NavDropdown.Item href="#action/3.2">
              View Reservations
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reservation" id="collasible-nav-dropdown">
            <Link href="/SignUpReservation">
           <a className="dropdown-item">Registrer Reservation</a>
            </Link>
            <NavDropdown.Divider />
            <Link href="/editReservation">
           <a className="dropdown-item">Edit Reservation</a>
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
