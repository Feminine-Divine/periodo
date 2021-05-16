import React, { useEffect, useState } from "react";
import style from "./SplashScreen.module.css";

function SplashScreen({ setSplashScreenVisible }) {
  const [firstTextStatus, setFirstTextStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstTextStatus(false);
    }, 2500);
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 5000);
  });
  return (
    <div className={style.container}>
      {firstTextStatus && (
        <img src="/woman_sitting.svg" alt="image_1" className={style.image} />
      )}
      {!firstTextStatus && (
        <img src="/woman_walking.svg" alt="image_2" className={style.image} />
      )}
      <div className={style.typewriter}>
        {firstTextStatus && <h1>Track your periods with Periodo</h1>}
        {!firstTextStatus && <h1>Get medical advice and more</h1>}
      </div>
    </div>
  );
}
export default SplashScreen;
