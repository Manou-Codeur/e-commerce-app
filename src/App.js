import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/main/home/home";
import ProdcutPage from "./components/main/product-page/product-page";
import Cart from "./components/main/cart/cart";
import GenreProduct from "./components/main/genreProduct/genreProduct";
import Order from "./components/main/order/order";
import NotFound from "./components/main/notFound/notFound";
import Footer from "./components/reuseable/footer/footer";

const Router = () => (
  <Switch>
    <Route path="/product/:productInfo" exact component={ProdcutPage} />
    <Route path="/home" exact component={Home} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/order" exact component={Order} />
    <Route path="/notFound" component={NotFound} />
    <Route path="/men" exact component={GenreProduct} />
    <Route path="/women" exact component={GenreProduct} />
    <Route path="/kids" exact component={GenreProduct} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/notFound" />
  </Switch>
);

const App = () => {
  return (
    <React.Fragment>
      <Router />
      <Footer />
    </React.Fragment>
  );
};

export default App;
