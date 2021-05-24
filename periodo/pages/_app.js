import React from "react";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
