import React from "react";
import Navbar from "../components/navbar.js";
import Home from "../components/calender/calender.js";
import Start from "../components/started.js";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Start />
      <Footer />
    </div>
  );
};

export default Homepage;
