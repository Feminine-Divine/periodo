import React from "react";
import Navbar from "../components/navbar.js";
import Home from "../components/calender/calender.js"
import Start from "../components/started.js"
import ChatBot from "../components/ChatBot/ChatBot"

const Homepage =()=> {
  return (
    <>
      <Navbar />
      <ChatBot />
      <Start/>
      </>
  );
}

export default Homepage;