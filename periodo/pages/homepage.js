import React from "react";
import Navbar from "../components/navbar.js";
import Home from "../components/calender/calender.js"
import ImgeSlider from "../components/ImgSlider/imgSlider"
import Start from "../components/started.js"

const Homepage =()=> {
  return (
    <>
      <Navbar />
     <ImgeSlider />
      <Start/>
      </>
  );
}

export default Homepage;