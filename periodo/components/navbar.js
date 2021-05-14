import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import stickyNavStyle from "./navbar.module.css";
import {
  faHome,
  faUser,
  faHandHoldingMedical,
  faNotesMedical,
  faFileMedical,
  faCalendarAlt,
  faAward,
  faStar,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ children }) => {
  const { user } = useUser();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <React.Fragment>
      <div className={stickyNavStyle.mobileNav}>
        <div className="header">
          <div className="logo-nav">
            <Link href="/">
              <a>
                <img
                  src="Logo.png"
                  height="64px"
                  width="160px"
                  padding="10px"
                  class="nav-img"
                ></img>
              </a>
            </Link>
            <ul className={click ? "nav-options active " : "nav-options "}>
              <li className="option" onClick={closeMobileMenu}>
                <Link href="/homepage">
                  <a class="Nav-bar Nav-Active">
                    Home <FontAwesomeIcon icon={faHome} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/about">
                  <a class="Nav-bar">
                    AboutUs <FontAwesomeIcon icon={faUser} />
                  </a>
                </Link>
              </li>
            </ul>

            <ul
              className={
                click
                  ? "nav-options active nav-options-right "
                  : "nav-options nav-options-right "
              }
            >
              <li className="option" onClick={closeMobileMenu}>
                <Link href="/Gynac">
                  <a class="Nav-bar">
                    GynacHelp <FontAwesomeIcon icon={faHandHoldingMedical} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/notes">
                  <a class="Nav-bar">
                    Notes <FontAwesomeIcon icon={faNotesMedical} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/tips">
                  <a class="Nav-bar">
                    Tips <FontAwesomeIcon icon={faFileMedical} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/calender">
                  <a class="Nav-bar">
                    Calendar <FontAwesomeIcon icon={faCalendarAlt} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/analysis">
                  <a class="Nav-bar">
                    Quiz <FontAwesomeIcon icon={faAward} />
                  </a>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link href="/flow">
                  <a class="Nav-bar">
                    Wanna Rate Yourself <FontAwesomeIcon icon={faStar} />
                  </a>
                </Link>
              </li>

              {user ? (
                <li className="option" onClick={closeMobileMenu}>
                  <Link href="/api/auth/logout">
                    <a className="Nav-bar">
                      Logout <FontAwesomeIcon icon={faSignOutAlt} />
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="option" onClick={closeMobileMenu}>
                  <Link href="/api/auth/login">
                    <a className="Nav-bar">
                      Login <FontAwesomeIcon icon={faSignInAlt} />
                    </a>
                  </Link>
                </li>
              )}
            </ul>

            <div
              className="mobile-menu nav-options-right"
              onClick={handleClick}
            >
              {click ? (
                <img src="x.svg" className="menu-icon" />
              ) : (
                <img src="menu.svg" className="menu-icon" />
              )}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
