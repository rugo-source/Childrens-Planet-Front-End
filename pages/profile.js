import { useState, useEffect } from "react";
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
import NavBar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
  return (
    <>
      <NavBar />
      <Carrusel />
    </>
  );
};
export default Profile;
