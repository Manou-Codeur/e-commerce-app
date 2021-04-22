import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID,
  REACT_APP_MEASUREMENTID,
} = process.env;

const config = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID,
};

class Firebase {
  constructor() {
    //init firebase config
    app.initializeApp(config);

    //init firebase auth method so we could use all it's functions
    this.auth = app.auth();

    //init firebase database method so we could use all it's functions
    this.db = app.database();
  }

  //auth methods
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  doUpdatePassword = newPassword =>
    this.auth.currentUser.updatePassword(newPassword);

  doSignOut = () => {
    return this.auth.signOut();
  };

  isUserAuthenticated = funct => {
    return this.auth.onAuthStateChanged(funct);
  };

  //db methods
  users = () => this.db.ref("/users");
  user = uid => this.db.ref(`users/${uid}`);

  addUser = ({ name, email, uid }) =>
    this.user(uid).set({
      name,
      email,
      personalAddress: "",
    });

  getProductReviews = productId => this.db.ref(`/productsReviews/${productId}`);

  getSpecificReview = (productId, uid) =>
    this.db.ref(`/productsReviews/${productId}/${uid}`);

  addProductReview = (productId, uid, rating, title, description) => {
    var updates = {};
    const reviewObj = {
      description,
      rating,
      title,
      uid,
    };

    updates["/productsReviews/" + productId + "/" + uid] = reviewObj;

    return this.db.ref().update(updates);
  };
}

export default Firebase;
