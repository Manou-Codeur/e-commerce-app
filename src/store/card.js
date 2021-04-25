import { createAction, createReducer } from "@reduxjs/toolkit";
import jwtGenerator from "jwt-decode";

//I need to get only the products picked up by the current user authed
let allProducts = JSON.parse(localStorage.getItem("products"));
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
export const updateCard = createAction("UPDATE_CARD");
export const removeFromCard = createAction("REMOVE_FROM_CARD");
export const clearCard = createAction("CLEAR_CARD");

export const cardReducer = createReducer(initState, {
  [addToCard.type]: (state, action) => {
    state.products.push(action.payload);
  },
  [updateCard.type]: (state, action) => {
    const productIndex = state.products.findIndex(
      product => product.pid == action.payload.pid
    );
    state.products[productIndex].amount = action.payload.newAmount;
  },
  [removeFromCard.type]: (state, action) => {
    const productIndex = state.products.findIndex(
      product => product.pid == action.payload.pid
    );
    state.products.splice(productIndex, 1);
  },
  [clearCard.type]: (state, action) => {
    state.products = [];
  },
});
