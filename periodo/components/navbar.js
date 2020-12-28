import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "./styles.js"

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
        <p><b>
          Periodo
        </b>
        </p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar 
