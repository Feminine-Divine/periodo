import React from "react"
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import { Nav, PageBody } from "./styles.js"

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
      <img src="Logo.png" height="64px" width="190px" padding="10px"></img>
      <Typography variant="h5" >

        </Typography>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/tips">
          <a>Tips</a>
        </Link>
        <Link href="/Gynac">
          <a>Gynac Help</a>
        </Link>

      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar
