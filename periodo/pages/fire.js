import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyD9bQnYHh-7918GhO1-ncc3yMVUFgD6Ndc",
    authDomain: "periodo-ed656.firebaseapp.com",
    projectId: "periodo-ed656",
    storageBucket: "periodo-ed656.appspot.com",
    messagingSenderId: "550068109448",
    appId: "1:550068109448:web:17df4cb98aad3a34b1df3d"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;