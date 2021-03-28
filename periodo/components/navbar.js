import React from "react"
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import { useUser } from '@auth0/nextjs-auth0';
import { Header, Nav, PageBody } from "./styles.js";
import styles from "./navbar.module.css";

const Navbar = ({ children }) => {
  const { user } = useUser();
  return (
<React.Fragment>
        <header className={styles.mobileNav}>
  <Header>

        <img src="Logo.png" height="64px" width="160px" padding="10px" className="nav-img"></img>
        <Nav>
          <input type= "checkbox" id="nav-btn"></input>
         <div className="main-navbar">
            <Link href="/homepage">
              <a className="Nav-bar Nav-Active">Home</a>
            </Link>
            {user ? <Link href="/api/auth/logout">
              <a className="Nav-bar">Logout</a>
            </Link> : <Link href="/api/auth/login">
              <a className="Nav-bar">Login</a>
            </Link>}
            <Link href="/tips">
              <a className="Nav-bar">Tips</a>
            </Link>
            <Link href="/Gynac">
              <a className="Nav-bar">GynacHelp</a>
            </Link>
            <Link href="/analysis">
              <a className="Nav-bar">Quiz</a>
            </Link>
            <Link href="/calender">
              <a className="Nav-bar">Calendar</a>
            </Link>
            <Link href="/about">
              <a className="Nav-bar">AboutUs</a>
            </Link>
            <Link href="/notes">
              <a className="Nav-bar">Notes</a>
            </Link>
            <label for="nav-btn">
              <div className="toggle" >
                <div className="toggel-btn"></div>
                <div className="toggel-btn"></div>
                <div className="toggel-btn"></div>
              </div>
            </label>
          </div>
        </Nav>

      </Header>
      <PageBody>{children}</PageBody>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
