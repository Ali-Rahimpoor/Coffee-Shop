import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";
import { loadCartFromLocalStorage } from "../utils/localStorage";
import type { ICart,TProduct } from "../types/Type";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { calculateDiscount } from "../utils/utils";
const cartAdapter = createEntityAdapter<ICart>();

const loadedState = loadCartFromLocalStorage();
const initialState = cartAdapter.getInitialState({
   cartTotalAmount: 0,
   cartTotalQty: 0,
   ...(loadedState || {})
});

const cartSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
addToCart(state,action:PayloadAction<TProduct>){
         const productExist = state.entities[action.payload.id];

         if(productExist){
            productExist.cartQty +=1;
            toast.success('تعداد افزایش یافت',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,});
         }else{
            cartAdapter.addOne(state,{...action.payload,cartQty:1});
             toast.success('محصول به سبد خرید اضافه شد',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,});
         }
      },
      getTotals(state){
         let {qty,total} = Object.values(state.entities as Record<number, ICart>).reduce(
            (cartTotal:{total:number,qty:number},cartItem:ICart)=>{
               const {price,cartQty,discount} = cartItem;
               const itemTotal = calculateDiscount (price,discount) * cartQty;

               cartTotal.total += itemTotal;
               cartTotal.qty += cartQty;

               return cartTotal;
               
            },{total:0,qty:0})

            state.cartTotalQty = qty;
            state.cartTotalAmount =total;
      },
      decreaseCart(state,action:PayloadAction<number>){
         const product = state.entities[action.payload];
         if(product){
         if(product.cartQty > 1){
               product.cartQty -=1;
                toast.warning('تعداد کاهش یافت',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,})
         }else{
            cartAdapter.removeOne(state,action.payload);
            toast.error('محصول حذف شد',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,})
         }
       }
      },
      deleteCart(state,action:PayloadAction<number>){
         cartAdapter.removeOne(state,action.payload);
         toast.error('محصول حذف شد',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,})
      },
      deleteAllCart(state){
         cartAdapter.removeAll(state);
         toast.error('همه محصولات حذف شدن !',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,})
      }
   }
});

export const {selectAll} = cartAdapter.getSelectors((state:RootState)=> state.cart);

export const {
   addToCart,
   getTotals,
   decreaseCart,
   deleteCart,
   deleteAllCart
} = cartSlice.actions;

export default cartSlice.reducer;