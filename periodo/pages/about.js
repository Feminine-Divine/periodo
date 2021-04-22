import React from "react";
import About from "../components/about/about";
import Head from "next/head";
import Navbar from "../components/navbar";
const about = () => {
  return (
    <>
      <About></About>
      <Head>
        <title>About</title>
      </Head>
    </>
  );
};
export default about;
