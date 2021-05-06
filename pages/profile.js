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
import Hero from "../components/Hero";
import DatePicker from "react-datepicker";
import { Countries } from "../constants/info";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {

   return (
    <>
    <NavBar />
 
        <Hero/>
       
    </>

   );
};
export default Profile;