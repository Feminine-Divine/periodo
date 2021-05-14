import React from "react";
import Head from "next/head";
import Profile from "../components/profile/profile";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/Footer";

const profile = () => (
  <>
    <Navbar />
    <Profile />
    <Head>
      <title>Profile</title>
    </Head>
    <Footer />
  </>
);
export default profile;
