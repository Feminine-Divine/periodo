import React from "react";
import styles from "./Footer.module.css";
import { Row, Col } from "reactstrap";
import GithubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <Row>
          <Col xs="4" className={styles.one}>
            <ul>
              <a href="/">About Us</a>
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
              <a href="/tips">Tips</a>
              <br />
              <br />
              <a href="/home">Home</a>
            </ul>
          </Col>
        </Row>
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
