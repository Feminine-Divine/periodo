import React from "react";
import Start from "../components/started.js";
import Layout from "../components/Layout";
import ChatBot from "../components/ChatBot/ChatBot";
import Emergency from "../components/Emergency/Emergency";

<<<<<<< HEAD
const Homepage = () => (
  <>
    <Layout>
      <Start />
    </Layout>
    <ChatBot />
    <Emergency />
  </>
);
=======
const Homepage = () => {
  return (
    <>
      <Layout>
        <Start />
      </Layout>
      <ChatBot />
      <Emergency />
    </>
  );
};
>>>>>>> 6c2a4d299865ea74ad9c606f8957b6f36d3ba0ca

export default Homepage;
