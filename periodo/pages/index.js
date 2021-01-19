import React,{useState,useEffect} from "react";
import fire from "./fire";

const index =()=> {
  const [user,setUser] = useState(" ");
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");
  const [emailError,setEmailError] = useState(" ");
  const [passwordError,setPasswordError] = useState(" ");
  const [hasAccount,sethasAccount] = useState(false);

  const handleLogin = ()=>{
    fire
       .auth()
       .signInWithEmailAndPassword(email,password)
       .catch((err)=>{
         switch(err.code){
           case "auth/invalid-email":
           case "auth/user-disabled":
           case "auth/user-not-found":
             setEmailError(err.message);
             break;
           case "auth/wrong-password":
             setPasswordError(err.message);
             break;
         }
       });
  };

  const handleSignUp =()=>{
    fire
       .auth()
       .createUserWithEmailAndPassword(email,password)
       .catch((err)=>{
         switch(err.code){
           case "auth/email-already-in-use":
           case "auth/invalid-email":
             setEmailError(err.message);
             break;
           case "auth/weak-password":
             setPasswordError(err.message);
             break;
         }
       });
  }

  const handleLogout =()=>{
    fire.auth().signOut();
  }

  const authListner = ()=>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
    authListner();
  },[]);

  return (
    <>
      </>
  );
}

export default index;
