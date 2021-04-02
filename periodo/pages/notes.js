import React from "react";
import Notes from "../components/notes/Notes";
import Navbar from "../components/navbar";
const notes = () => {
  return (
    <>
      <Navbar />
      <div style={{background: "#d9dbda",
                    padding: "10px", height:"100vh"}}>
      <Notes />
      </div>
    </>
  );
};
export default notes;
