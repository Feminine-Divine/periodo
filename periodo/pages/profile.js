import React from "react";
import Profile from "../components/profile/profile";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/Footer";
const profile = () => {
  return (
    <>
     <Navbar />
      <Profile></Profile>
      <Head>
        <title>Profile</title>
      </Head>
      <Footer />
    </>
  );
};
export default profile;
