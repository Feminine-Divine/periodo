import React from "react";
import Start from "../components/started.js";
import Layout from "../components/Layout";
import ChatBot from "../components/ChatBot/ChatBot";
import Emergency from "../components/Emergency/Emergency";

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

export default Homepage;
