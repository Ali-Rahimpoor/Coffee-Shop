import { configureStore } from "@reduxjs/toolkit";
import { saveCartToLocalStorage } from "../utils/localStorage";
import cartReducer from "../features/cartSlice";
import themeReducer from "../features/themeSlice"
export const store = configureStore({
   reducer:{
      cart:cartReducer,
      theme: themeReducer,
   },
});
store.subscribe(()=>{
   const state = store.getState();
   saveCartToLocalStorage(state.cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;