import React from "react";
import Navbar from "../components/navbar.js";
import Home from "../components/calender/calender.js";
import Start from "../components/started.js";
import Footer from "../components/Footer/Footer.js";
import ChatBot from "../components/ChatBot/ChatBot";
import Emergency from "../components/Emergency/Emergency";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Start />
      <Footer />
      <ChatBot />
      <Emergency />
    </>
  );
};

export default Homepage;
