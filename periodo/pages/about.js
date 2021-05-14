import React from "react";
import Head from "next/head";
import About from "../components/about/about";
<<<<<<< HEAD
import Layout from "../components/Layout";

const about = () => (
  <>
    <Layout>
      <About />
      <Head>
        <title>About</title>
      </Head>
    </Layout>
  </>
);
=======
import Head from "next/head";
import Layout from "../components/Layout";

const about = () => {
  return (
    <>
      <Layout>
        <About></About>
        <Head>
          <title>About</title>
        </Head>
      </Layout>
    </>
  );
};
>>>>>>> 6c2a4d299865ea74ad9c606f8957b6f36d3ba0ca
export default about;
