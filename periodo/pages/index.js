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
    </>
  );
};

export default index;
