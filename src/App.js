import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/reuseable/navBar/navBar";
import Home from "./components/main/home/home";
import ProdcutPage from "./components/main/product-page/product-page";
import Bag from "./components/main/bag/bag";
import GenreProduct from "./components/main/genreProduct/genreProduct";
import Order from "./components/main/order/order";
import Profile from "./components/main/profile/profile";
import NotFound from "./components/main/notFound/notFound";
import Footer from "./components/reuseable/footer/footer";
import FirebaseContext from "./server/firebase/firebaseContext";
import Firebase from "./server/firebase/firebase-config";

const Router = () => (
  <Switch>
    <Route path="/product/:productInfo" exact component={ProdcutPage} />
    <Route path="/home" exact component={Home} />
    <Route path="/bag" exact component={Bag} />
    <Route path="/order" exact component={Order} />
    <Route path="/notFound" component={NotFound} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/men" exact component={GenreProduct} />
    <Route path="/women" exact component={GenreProduct} />
    <Route path="/kids" exact component={GenreProduct} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/notFound" />
  </Switch>
);

const firebase = new Firebase();

const App = () => {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <React.Fragment>
        <NavBar />
        <Router />
        <Footer />
      </React.Fragment>
    </FirebaseContext.Provider>
  );
};

export default App;
