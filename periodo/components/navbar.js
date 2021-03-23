import React from "react";
import Link from "next/link";
import { Header, Nav, PageBody } from "./styles.js";

const Navbar = ({ children }) => {
  return (
<React.Fragment>
 
  <Header>
  <img src="Logo.png" height="64px" width="160px" padding="10px" class="nav-img"></img>
        <Nav>
          <input type= "checkbox" id="nav-btn"></input> 
         <div class="main-navbar"> 
            <Link href="/">
            <a class="Nav-bar Nav-Active">Home</a>
          </Link>
          <Link href="/tips">
            <a class="Nav-bar">Tips</a>
          </Link>
          <Link href="/Gynac">
            <a class="Nav-bar">GynacHelp</a>
          </Link>
          <Link href = "/analysis">
        <a class="Nav-bar">Quiz</a>
        </Link>
        <Link href="/calender">
          <a class="Nav-bar">Calendar</a>
        </Link>
        <Link href="/about">
          <a class="Nav-bar">AboutUs</a>
        </Link>
        <Link href="/notes">
        <a class="Nav-bar">Notes</a>
        </Link>
          </div>
          <label for="nav-btn">
            <div class="toggle">
              <div class="toggel-btn"></div>
              <div class="toggel-btn"></div>
              <div class="toggel-btn"></div>
            </div>
          </label>
        </Nav>
      </Header>

      <PageBody>{children}</PageBody>
    </React.Fragment>
  );
};

export default Navbar;
