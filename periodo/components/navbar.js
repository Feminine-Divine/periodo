import React from "react"
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import { Nav, PageBody } from "./styles.js"
import styles from "./navbar.module.css"

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
    <header className={styles.mobileNav}>
      <Nav>
      <img src="Logo.png" height="64px" width="190px" padding="10px"></img>
      <Typography variant="h5" >

        </Typography>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/tips">
          <a>Tips</a>
        </Link>

      </Nav>
      <PageBody>{children}</PageBody>
      </header>
    </React.Fragment>
  )
}

export default Navbar
