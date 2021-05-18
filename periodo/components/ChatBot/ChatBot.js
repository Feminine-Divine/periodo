import React, { useState } from "react";
import SimpleForm from "../../pages/SimpleForm";
import styles from "./chatBot.module.css";

const App = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm></SimpleForm>
        </div>
        {!showChat ? (
          <button className={styles.btn} onClick={() => startChat()}>
            Click to chat...{" "}
          </button>
        ) : (
          <button className={styles.btn} onClick={() => hideChat()}>
            Click to hide...{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default App;
