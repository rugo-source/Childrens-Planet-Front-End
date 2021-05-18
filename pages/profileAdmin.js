import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import moment from "moment";
import NavBarOne from "../components/Navbar.Admin";
import Carrusel from "../components/Carrusel";
import Text from "../components/Text";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <NavBarOne />
      <Carrusel />
    </>
  );
};
export default Profile;
