import { createAction, createReducer } from "@reduxjs/toolkit";
import jwtGenerator from "jwt-decode";

//I need to get only the products picked up by the current user authed
const allProducts = JSON.parse(localStorage.getItem("products"));
let currProducts = [];
try {
  const { user_id } = jwtGenerator(
    JSON.parse(localStorage.getItem("user-authed"))
  );

  for (let product of allProducts) {
    if (product.uid === user_id) currProducts.push(product);
  }
} catch (e) {}

const initState = {
  products: [...currProducts],
};

export const addToCard = createAction("ADD_TO_CARD");

export const cardReducer = createReducer(initState, {
  [addToCard.type]: (state, action) => {
    state.products.push(action.payload);
  },
});
