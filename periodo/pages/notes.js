import React from "react";
import Notes from "../components/notes/Notes";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/Footer";
const notes = () => {
  return (
    <>
      <Navbar />
      <Notes />
      <Footer />
    </>
  );
};
export default notes;
