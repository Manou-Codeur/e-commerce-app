import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDvHWYBNzSQK1KEjkM5PImDv-jfFtBdSgs",
  authDomain: "react-e-commerce-app-18fea.firebaseapp.com",
  projectId: "react-e-commerce-app-18fea",
  storageBucket: "react-e-commerce-app-18fea.appspot.com",
  messagingSenderId: "1067863401277",
  appId: "1:1067863401277:web:976b7d36a3d863b7809b54",
  measurementId: "G-K110GH0GKD",
};

class Firebase {
  constructor() {
    //init firebase config
    app.initializeApp(config);

    //init firebase auth method so we could use all it's functions
    this.auth = app.auth();

    //init firebase auth method so we could use all it's functions
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  //method to singin a user
  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  //method to reset the password
  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  //method to singout a user
  doSignOut = () => {
    return this.auth.signOut();
  };

  //db methods
  user = uid => this.db.ref(`users/${uid}`);
}

export default Firebase;
