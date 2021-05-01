import React from "react";
import About from "../components/about/about";
import Head from 'next/head'
import Navbar from "../components/navbar";
import Footer from "../components/Footer/Footer";
const about = () => {
  return (
    <>
      <About></About>
      <Head><title>About</title></Head>
      <Footer />
    </>
  );
}
export default about;
