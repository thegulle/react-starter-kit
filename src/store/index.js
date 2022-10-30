import { configureStore } from "@reduxjs/toolkit";
import productStore from "./ProductStore";
import cartStore from "./CartStore";

const store = configureStore({
  reducer: {
    productStore,
    cartStore
  }
})

export default store