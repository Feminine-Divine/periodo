import React from "react";
import Navbar from "../components/navbar.js";
import Start from "../components/started.js";
import Layout from "../components/Layout";
import Footer from "../components/Footer/Footer.js";
import ChatBot from "../components/ChatBot/ChatBot";
import Emergency from "../components/Emergency/Emergency";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from '../styles/Home.module.css';




const Homepage = () => {
  return (
    <>
      <Navbar />
        <div className={styles.socialIcons}>
            <a data-testid="github" href="https://github.com/Feminine-Divine/periodo"><GitHubIcon className={styles.icons} /></a>
            <a data-testid="mail" href="mailto:femininedivine591@gmail.com"><MailIcon className={styles.icons} /></a>
            <a data-testid="linkedin" href="https://www.linkedin.com/company/feminine-divine/"><LinkedInIcon className={styles.icons} /></a>
            <a data-testid="instagram" href=""><InstagramIcon className={styles.icons} /></a>
        </div>
      <Start />
      <Layout />
      <ChatBot />
      <Emergency />
    </>
  );
};

export default Homepage;
