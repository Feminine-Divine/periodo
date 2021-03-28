import React,{useState} from "react";
import Link from "next/link";

const Navbar = ({ children }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
<React.Fragment>
 <div className="header">
   <div className="logo-nav">
     <Link href="/">
     <img src="Logo.png" height="64px" width="160px" padding="10px" class="nav-img"></img>
     </Link>
     <ul className={click ? "nav-options active " : "nav-options "} >
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/">
            <a class="Nav-bar Nav-Active">Home</a>
          </Link>
          </li>
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
          <Link href="/about">
          <a class="Nav-bar">AboutUs</a>
        </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href="/notes">
        <a class="Nav-bar">Notes</a>
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
  {/* <div>
  <img src="Logo.png" height="64px" width="160px" padding="10px" class="nav-img"></img>
        <nav>
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
        </nav>
      </div> */}

      <div>{children}</div>
    </React.Fragment>
  );
};

export default Navbar;
