import React from "react";
import Link from "next/link";
import { Header, Nav, PageBody } from "./styles.js";

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <img
          src="Logo.png"
          height="64px"
          width="190px"
          padding="10px"
          class="nav-img"
        />
        <Nav>
          <div class="main-navbar">
            <Link href="/">
              <a class="Nav-bar Nav-Active">Home</a>
            </Link>
            <Link href="/tips">
              <a class="Nav-bar">Tips</a>
            </Link>
            <Link href="/analysis">
              <a class="Nav-bar">Quiz</a>
            </Link>
            <Link href="/calender">
              <a class="Nav-bar">Calendar</a>
            </Link>
            <Link href="/about">
              <a class="Nav-bar">About Us</a>
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
