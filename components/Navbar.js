import styles from "../styles/Navbar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      className="fixed-top shadow-lg"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand className="ml-lg-5">
        <a
          className="nav-link"
          href="#home"
          //onClick={hola}
          style={{ outline: "0" }}
        >
          <img style={{ height: "2em" }} src={"/chil.svg"} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features"> Inicio </Nav.Link>
          <NavDropdown title="Usuario" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> 
            Edit user
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              View Reserved
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reservation" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Registrar Reservation
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Edit Reservation
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
