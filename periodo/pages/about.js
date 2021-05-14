import React from "react";
import Head from "next/head";
import About from "../components/about/about";
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
export default about;
