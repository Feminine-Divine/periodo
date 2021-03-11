import React from "react"
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import { Nav, PageBody } from "./styles.js"

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
      <Typography variant="h5" >
                Period Tracker
        </Typography>
      
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/tips">
          <a>Tips</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar 
