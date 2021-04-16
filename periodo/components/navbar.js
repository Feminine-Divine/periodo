import React,{useState} from "react"
import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0';
import stickyNavStyle from "./navbar.module.css"

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
      <a >
     <img src="Logo.png" height="64px" width="160px" padding="10px" class="nav-img"></img>
     </a>
     </Link>
     <ul className={click ? "nav-options active " : "nav-options "} >
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/">
            <a class="Nav-bar Nav-Active">Home</a>
          </Link>
          </li>
          {user ?

            <li className="option" onClick={closeMobileMenu}>
            <Link href="/api/auth/logout">
              <a className="Nav-bar">Logout</a>
            </Link>
          </li>
           :
           <li className="option" onClick={closeMobileMenu}>
           <Link href="/api/auth/login">
              <a className="Nav-bar">Login</a>
            </Link>
          </li>
          }
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/tips">
            <a class="Nav-bar">Tips</a>
          </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/Gynac">
            <a class="Nav-bar">GynacHelp</a>
          </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href = "/analysis">
        <a class="Nav-bar">Quiz</a>
        </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/calender">
          <a class="Nav-bar">Calendar</a>
        </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/flow">
          <a class="Nav-bar">Wanna Rate Yourself</a>
        </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/notes">
        <a class="Nav-bar">Notes</a>
        </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/about">
          <a class="Nav-bar">AboutUs</a>
        </Link>
          </li>
        </ul>
           <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src="x.svg" className="menu-icon" />
        ) : (
          <img src="menu.svg" className="menu-icon" />
        )}
      </div>
   </div>


 </div>

        {/* <header className={styles.mobileNav}>
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
            <Link href="/flow">
              <a className="Nav-bar">Wanna Rate Yourself</a>
            </Link>
            <Link href="/notes">
              <a className="Nav-bar">Notes</a>
            </Link>
            <Link href="/about">
              <a className="Nav-bar">AboutUs</a>
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

      </Header> */}
      <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
