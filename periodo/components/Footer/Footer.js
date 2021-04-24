import React from "react";
import styles from "./Footer.module.css";
import ContactUs from "./ContactUs";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Col } from "reactstrap";

export default function Footer() {
  return (
        <div>
        <div style={{background:"#131313", paddingTop:"100px", marginTop:"350px"}}>
        <Col className={styles.contactus} style={{color:"#131313"}}lg="12">
            <ContactUs />  
        </Col>
        <div className={styles.footer__container}>
        <div className={styles.footer__links}>
            <div>
            <div className={styles.footer_opensource}>
                <h2>Open Source Contribution</h2>
                <p>Your contributions are most welcomed!</p>
                <div className={styles.social__icons} className={styles.github} style={{display: "flex", justifyContent:"center"}}>
                <a href="https://github.com/Feminine-Divine/periodo" className={styles.social__icon_link}
                ><GitHubIcon style={{marginTop:"15px", fontSize:"30px"}}/></a>
            </div>
            </div>
            </div>
        </div>
        <section className={styles.social__media}>
            <div className={styles.social__media_wrap}>
            <div className={styles.footer__logo}>
                <a href="/" id={styles.footer__logo}>PERIODO</a>
            </div>
            <p className={styles.website__rights}>© FEMININE-DIVINE 2021. All rights reserved.</p>
            <div className={styles.social__icons}>
                <a href="mailto:dpskhu13108@gmail.com" className={styles.social__icon_link}
                ><MailIcon style={{fontSize:"30px"}}/></a>
                <a href="" className={styles.social__icon_link}
                ><InstagramIcon style={{fontSize:"30px"}}/></a>
                <a href="https://www.linkedin.com/company/feminine-divine/" className={styles.social__icon_link}
                ><LinkedInIcon style={{fontSize:"30px"}}/></a>
            </div>
            </div>
            <div className={styles.footer_opensource}>
                <h2>With ♥ By FeminineDivine</h2>
             </div>
        </section>
        </div>
        </div>
        </div>
    
  );
}

/*   
       <div>
      <div className={styles.footer}>
        <Container>
        <Row>
          <Col xs="4" className={styles.one}>          
            <ul>
              <a href="/about">About Us</a>
              <br />
              <br />
              <a
               className={styles.iconGit}
                href="https://github.com/Feminine_Divine/periodo"
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
        <Col className={styles.contactus} lg="12">
            <ContactUs />  
        </Col>
      </div>

      <div className={styles.base}>
        <p className={text_center" style={{ fontWeight: "100" }}>
          Made with <FavoriteIcon style={{ color: "#fca9c5" }} />
          &nbsp;by
          <a
            href="https://github.com/Feminine_Divine                                                                               "
            target="_blank"
          >
            <b style={{ color: "#fca9c5", fontWeight: "bold" }}>
              &nbsp; <u>FeminineDivine</u>
            </b>
          </a>
        </p>
      </div>
    </div>

    */
