import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { addToCart, decreaseCart, deleteCart, selectAll } from "../features/cartSlice";
import { calculateDiscount, ShowDiscount, TomanConvertor } from "../utils/utils";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { getTotals } from "../features/cartSlice";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import type { TProduct } from "../types/Type";
import { IoClose } from "react-icons/io5";

type CartMobileProps = {
   handleCloseCart: ()=>void
}
const CartMobile = ({handleCloseCart}:CartMobileProps)=>{

   const cartQty = useSelector((state:RootState)=>state.cart.cartTotalQty);
   const totalAmount = useSelector((state:RootState) => state.cart.cartTotalAmount);
   const cartItems = useSelector(selectAll);
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);


   const handleRemoveCart = (id:number)=>{
      dispatch(deleteCart(id));
   }

   const handleAddCart = (product:TProduct)=>{
      dispatch(addToCart(product));
   }

   const handleDecreaseCart = (id:number)=>{
      dispatch(decreaseCart(id));
   }

   return(
      <>
         
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">
          <button className="cart-close" onClick={handleCloseCart}>
            <IoClose className="w-5 h-5 text-zinc-600 dark:text-white" />
          </button>
          {cartQty !==0? 
          <> 
          <span className="text-zinc-700 dark:text-white">سبد خرید</span>  
          </>: <span className="text-zinc-700 dark:text-white">سبد خرید خالی است</span>}
        </div>
         {cartQty !==0 ? (
            <>
        <ul className="[&>*]:pb-5 [&>*]:mb-5">
          {cartItems.map((cartItem,index)=>(
            <li key={index} className="flex flex-col items-center gap-y-1 border-b border-b-gray-100 dark:border-b-white/10">
               <img
                src={cartItem.image}
                alt="product"
                className="w-[110px] shadow h-[110px]"
              />
               <div className="flex flex-col justify-between gap-y-1">
                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm my-1 line-clamp-2">
                     {cartItem.title}
                </h4>
                <div>
                  <span className="text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter ">
                        { cartItem.discount !==0 ? <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter ">{TomanConvertor( ShowDiscount(cartItem.price,cartItem.discount))} تومان تخفیف گرفته اید</span> : null}
                  </span>
                  <div className="text-zinc-700 dark:text-white font-DanaBold">
                     {TomanConvertor(calculateDiscount(cartItem.price,cartItem.discount))}
                    <span className="font-Dana text-xs">تومان</span>
                  </div>
                </div>
              </div>
              <div className="flex dark:text-orange-300 text-zinc-500 justify-between items-center gap-x-2 mt-3">
                                    <span className="w-15">{cartItem.cartQty} عدد</span>
                                    <button onClick={()=>handleDecreaseCart(cartItem.id)}>
                                    <FaMinusCircle className="w-5 h-5 hover:scale-105 transition-transform cursor-pointer"/>
                                    </button>
                                    <button onClick={()=>handleAddCart(cartItem)}>
                                    <FaPlusCircle className="w-5 h-5 hover:scale-105 transition-transform cursor-pointer"/>
                                    </button>
                                    <button onClick={()=>handleRemoveCart(cartItem.id)}>
                                       <MdOutlineRemoveShoppingCart className="w-5 h-5 mx-3 hover:scale-105 transition-transform cursor-pointer"/>
                                    </button>
                                    </div>
            </li>
          ))}
        </ul>

        <div className="flex items-start gap-x-4 mt-auto mb-8">
          <Link
            to="#"
            className="flex items-center justify-center h-11 w-28 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl"
          >
            ثبت سفارش
          </Link>
          <div>
            <span className="font-DanaMedium text-gray-300 dark:text-gray-300 text-xs tracking-tighter ">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 dark:text-white font-DanaBold">
                    {TomanConvertor(totalAmount)}
              <span className="font-Dana text-xs">تومان</span>
            </div>
          </div>
        </div>
        </>) : null}
      </>
   )
}
export default CartMobile;