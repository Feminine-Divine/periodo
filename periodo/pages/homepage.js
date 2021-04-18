import React from "react";
import Navbar from "../components/navbar.js";
import Home from "../components/calender/calender.js"
import Start from "../components/started.js"
import Footer from "../components/Footer/Footer.js"
import ChatBot from "../components/ChatBot/ChatBot"
import Emergency from "../components/Emergency/Emergency"




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
