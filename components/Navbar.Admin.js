import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Link from "next/link";
const NavBarOne = () => {
  const router = useRouter();
  return (
    <Navbar
      className="fixed-top shadow-lg"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Link href="/profileAdmin">
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
          <Link href="/profileAdmin">
            <a className="nav-link">Inicio </a>
          </Link>
          <NavDropdown title="Usuario" id="collasible-nav-dropdown">
            <Link href="/deleteUser">
              <a className="dropdown-item">Delete User</a>
            </Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <Form className="justify-content-end">
            <Button
              variant="outline-danger"
              onClick={() => {
                localStorage.removeItem("user");
                router.push("/");
              }}
            >
              Exit
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBarOne;
