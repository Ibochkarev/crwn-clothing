import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8mOYK2lt6meG2o2SfuFYIrr08qpsgU1k",
  authDomain: "crwn-db-f08d5.firebaseapp.com",
  databaseURL: "https://crwn-db-f08d5.firebaseio.com",
  projectId: "crwn-db-f08d5",
  storageBucket: "crwn-db-f08d5.appspot.com",
  messagingSenderId: "441396571648",
  appId: "1:441396571648:web:3575506d50f66cc55d32e5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
