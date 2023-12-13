import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEjZAsEDVsc81_m02gXUSx3hPk2ZtmS58",
  authDomain: "react-blog-9a56e.firebaseapp.com",
  projectId: "react-blog-9a56e",
  storageBucket: "react-blog-9a56e.appspot.com",
  messagingSenderId: "804534452099",
  appId: "1:804534452099:web:60d99a49554928d22240b6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
