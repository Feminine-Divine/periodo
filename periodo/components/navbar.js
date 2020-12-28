import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "./styles.js"

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/page-two">
          <a>Page 2</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar 
