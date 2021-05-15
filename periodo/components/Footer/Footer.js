import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";
import ContactUs from "./ContactUs";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Col } from "reactstrap";

export default function Footer() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  useEffect(
    () => setIsHome(router.pathname === "/homepage" || router.pathname === "/"),
    [router.pathname]
  );
  console.log(isHome);
  return (
    // <React.Fragment>
    //   <div
    //     className={`${styles.footer__wrapper} ${
    //       isHome && styles.footer__pagedep
    //     }`}
    //   >
        // {isHome && (
        //   <Col
        //     className={styles.contactus}
        //     style={{ color: "#131313" }}
        //     lg="12"
        //   >
            
          // </Col> 
      
        <div className={styles.footer__container}>
          <div className={styles.footer__links}>
            <div>
              <div className={styles.footer_opensource}>
                <h2>Open Source Contribution</h2>
                <p>Your contributions are most welcomed!</p>
                <div
                  className={styles.social__icons}
                  className={styles.github}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="https://github.com/Feminine-Divine/periodo"
                    className={styles.social__icon_link}
                  >
                    <GitHubIcon
                      style={{ marginTop: "15px", fontSize: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.social__media}>
            <div className={styles.social__media_wrap}>
              <div className={styles.footer__logo}>
                <a href="/" id={styles.footer__logo}>
                  PERIODO
                </a>
              </div>
              <p className={styles.website__rights}>
                © FEMININE-DIVINE 2021. All rights reserved.
              </p>
              <div className={styles.social__icons}>
                <a
                  href="mailto:femininedivine591@gmail.com"
                  className={styles.social__icon_link}
                >
                  <MailIcon style={{ fontSize: "30px" }} />
                </a>
                <a href="" className={styles.social__icon_link}>
                  <InstagramIcon style={{ fontSize: "30px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/feminine-divine/"
                  className={styles.social__icon_link}
                >
                  <LinkedInIcon style={{ fontSize: "30px" }} />
                </a>
              </div>
            </div>
            <div className={styles.footer_opensource}>
              <h2>With ♥ By FeminineDivine</h2>
            </div>
          </section>
        </div>
     
    
  );
}
