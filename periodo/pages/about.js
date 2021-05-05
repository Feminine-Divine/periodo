import React from "react";
import About from "../components/about/about";
import Head from 'next/head'
import Layout from '../components/Layout';

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
export default about;
