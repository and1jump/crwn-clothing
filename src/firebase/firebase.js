import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-IWVWZTifdwVnQNEwY-TezlQXfjP4Cjc",
  authDomain: "crwn-db-aacc4.firebaseapp.com",
  databaseURL: "https://crwn-db-aacc4.firebaseio.com",
  projectId: "crwn-db-aacc4",
  storageBucket: "crwn-db-aacc4.appspot.com",
  messagingSenderId: "1039571340065",
  appId: "1:1039571340065:web:f67b28f20a7273d6944c60",
  measurementId: "G-LKLPLT9EZX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
