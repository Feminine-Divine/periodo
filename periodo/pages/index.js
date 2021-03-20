<<<<<<< HEAD
import React from "react";
import Homepage from "./homepage";
const index = () => {
  return (
    <>
      <Homepage />
=======
import React, { useState } from "react";
import Homepage from "./homepage";
import SplashScreen from "../components/splashScreen/SplashScreen";

const index = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  return (
    <>
      {splashScreenVisible && (
        <SplashScreen setSplashScreenVisible={setSplashScreenVisible} />
      )}
      {!splashScreenVisible && <Homepage />}
>>>>>>> ce13e0c29b2d93ed05cf7dd1dd0bff102dfc9660
    </>
  );
};

export default index;
