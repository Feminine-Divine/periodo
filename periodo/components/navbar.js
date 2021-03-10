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
      <Typography variant="h5" >
                Period Tracker
        </Typography>
      
        <Link href="/">
          <a>Home</a>
        </Link>
    {user?<Link href="/api/auth/logout">
          <a>Logout</a>
        </Link> : <Link href="/api/auth/login">
          <a>Login</a>
        </Link>}
        
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Navbar 
