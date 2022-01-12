import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyB1FG2NaelySJ5uCBqklQFimMjp9_p6_2A",
  authDomain: "chatapp-10078.firebaseapp.com",
  projectId: "chatapp-10078",
  storageBucket: "chatapp-10078.appspot.com",
  messagingSenderId: "867692767534",
  appId: "1:867692767534:web:b234c2081304ce73ccf2bf"
    
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();