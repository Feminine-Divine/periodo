import React from "react";
import styles from "./Footer.module.css";
import { Container,Row, Col } from "reactstrap";
import GithubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Link from "next/link"
import ContactUs from "./ContactUs";
export default function Footer() {
  return (
    
    <div>
      <div className={styles.footer}>
        <Container>
        <Row>
        <Col lg="12">
            <ContactUs />  
        </Col>
          <Col xs="4" className={styles.one}>
          
            <ul>
              <a href="/about">About Us</a>
              <br />
              <br />
              <a
               className={styles.iconGit}
                href="https://github.com/Feminine-Divine/periodo"
                target="_blank"
              >
                <GithubIcon
                className={styles.iconGit}
                  alt="github"
                  style={{ width: "65px", height: "37px", color: "white" }}
                />
              </a>
            </ul>
          </Col>
          <Col xs="4" className={styles.two}>
            <ul>
              <Link href="/contact">Contact Us</Link>
              <br />
              <br />
              <ContactSupportIcon  style={{width:"50px",height:"40px",marginLeft:"25px"}}/>
            </ul>
          </Col>
        </Row>
        </Container>
      </div>

      <div className={styles.base}>
        <p className="text-center" style={{ fontWeight: "100" }}>
          Made with <FavoriteIcon style={{ color: "#fca9c5" }} />
          &nbsp;by
          <a
            href="https://github.com/Feminine-Divine                                                                               "
            target="_blank"
          >
            <b style={{ color: "#fca9c5", fontWeight: "bold" }}>
              &nbsp; <u>FeminineDivine</u>
            </b>
          </a>
        </p>
      </div>
    </div>
  );
}
