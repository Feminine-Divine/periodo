import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID = '246533887386-o890hff552huvands3abmla9p72h2o18.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileOBj);
  };

  const onFailure = (res)=> {
    console.log('[Login failure] res:', res);
  };

  return (
    <>
      <div>
        <GoogleLogin
         clientId={clientID}
         buttonText="Login"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         style={{ marginTop: "100px"}}
         isSignedIn={true}
        />
      </div>
    </>
  );
}


export default Login;