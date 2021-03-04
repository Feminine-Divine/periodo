import React from "react";
import Link from 'next/link'
import { GoogleLogin } from "react-google-login";
import { FacebookLogin } from "react-facebook-login";

const clientID = '246533887386-o890hff552huvands3abmla9p72h2o18.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res)=> {
    console.log('[Login failure] res:', res);
  };

  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <>
      <div>
      <Link href='/Homepage'>
        <GoogleLogin
         clientId={clientID}
         buttonText="Login"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         style={{ marginTop: "100px"}}
         isSignedIn={true}
         />

        <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} 
        />
      </Link>
      </div>
    </>
  );
}


export default Login;