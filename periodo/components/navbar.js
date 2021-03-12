import React from "react"
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import { Nav, PageBody } from "./styles.js"
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = ({ children }) => {
  const {user} = useUser();
  return (
    <React.Fragment>
      <Nav>
      <img src="Logo.png" height="64px" width="190px" padding="10px"></img>
      <Typography variant="h5" >

        </Typography>

        <Link href="/">
          <a>Home</a>
        </Link>
    {user?<Link href="/api/auth/logout">
          <a>Logout</a>
        </Link> : <Link href="/api/auth/login">
          <a>Login</a>
        </Link>}
        
        <Link href="/tips">
          <a>Tips</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar
