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
        <Nav className=" justify-content-center w-100 mr-5">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                //		onClick={hola}
                style={{ outline: "0" }}
              >
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <NavDropdown className={styles.dropdown} title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Editar Usuario
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Ver  Reservacion
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <NavDropdown title="Reservacion" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Registrar Reservacion
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Editar Reservacion
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
