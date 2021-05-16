import React, { useState } from "react";
import styles from "./emergency.module.css";

const App = (props) => {
  let [showMenu, setShowMenu] = useState(false);
  
  const startMenu = () => {
    setShowMenu(true);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="emergency">
        <div style={{ display: showMenu ? "" : "none" }}>
          <p>
            <a
              href="https://www.google.com/maps/search/public+toilet+near+me/"
              target="_blank"
            >
              <button className={styles.btn} onClick={() => hideMenu()}>
                Public
              </button>
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/search/restaurants+near+me/"
              target="_blank"
            >
              <button className={styles.btn} onClick={() => hideMenu()}>
                Restaurant
              </button>
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/search/hospitals+near+me/"
              target="_blank"
            >
              <button className={styles.btn} onClick={() => hideMenu()}>
                Hospital
              </button>
            </a>
          </p>
        </div>
        {!showMenu ? (
          <button className={styles.btn} onClick={() => startMenu()}>
            Restrooms
          </button>
        ) : (
          <button className={styles.btn} onClick={() => hideMenu()}>
            Restrooms
          </button>
        )}
      </div>
    </>
  );
};

export default App;
