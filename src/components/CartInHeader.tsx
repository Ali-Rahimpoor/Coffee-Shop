import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
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
const CartInHeader = ()=>{

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
     <div className="relative group">
                      <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartQty ?? 0}
              </span>
                    {/* <!-- cart icon hover --> */}
                    <div className="py-3 cursor-pointer">
                        <RiShoppingCart2Line className="w-8 h-8"/>
                    </div>
                    {/* <!-- cart box --> */}
                       <div className="w-[400px] p-5 opacity-0 invisible absolute left-0 top-full group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-shadow-normal rounded-2xl transition-all delay-75">  
                        { cartQty !==0 ?
                        <div>
                        <div className="flex items-center justify-between tracking-tighter font-DanaMedium text-xs">
                            <span className="text-gray-300 ">{cartQty} مورد</span>
                            <Link to="#" className="flex items-center text-orange-300">
                                مشاهده سبد خرید
                               <HiChevronLeft className="w-4 h-4"/>
                            </Link>
                        </div>
                        
                        <ul className="pb-1 max-h-83 overflow-y-auto border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10
scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-zinc-800 dark:scrollbar-thumb-zinc-600
[&>*]:py-4">
                             {
                              cartItems.map((cartItem,index)=>(
                                 <li key={index} className="flex gap-x-2.5">
                                     <img src={cartItem.image} alt={cartItem.title} className="w-30 h-30"/>
                                <div className="">
                                    <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base mb-4 line-clamp-2">{cartItem.title}</h4>
                                    <div >
                                       <div className="flex items-center justify-between">
                                          <div>
                                        { cartItem.discount !==0 ? <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter ">{TomanConvertor( ShowDiscount(cartItem.price,cartItem.discount))} تومان تخفیف گرفته اید</span> : null}
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                             {TomanConvertor(calculateDiscount(cartItem.price,cartItem.discount))}
                                            <span className="font-Dana text-xs">تومان</span>
                                            </div>
                                            </div>
                                            <button onClick={()=>handleRemoveCart(cartItem.id)}>
                                            <MdOutlineRemoveShoppingCart className="w-7 h-7 cursor-pointer dark:text-orange-300 text-zinc-500"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex dark:text-orange-300 text-zinc-500 justify-between items-center gap-x-2 mt-3">
                                    <span className="w-15">{cartItem.cartQty} عدد</span>
                                    <button onClick={()=>handleDecreaseCart(cartItem.id)}>
                                    <FaMinusCircle className="w-6 h-6 hover:scale-105 transition-transform cursor-pointer"/>
                                    </button>
                                    <button onClick={()=>handleAddCart(cartItem)}>
                                    <FaPlusCircle className="w-6 h-6 hover:scale-105 transition-transform cursor-pointer"/>
                                    </button>
                                    </div>
                                </div>
                                 </li>
                              ))
                             }
                        </ul>
                        
                         <div className="flex justify-between mt-5">
                            <div>
                                <span className="font-DanaMedium text-gray-300 dark:text-gray-300 text-xs tracking-tighter ">مبلغ قابل پرداخت</span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                             {TomanConvertor(totalAmount)}
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                            </div>
                            <Link to="#" className="text-white bg-teal-600 dark:bg-emerald-500 transition-colors hover:bg-teal-700 dark:hover:bg-emerald-600 h-14 w-[144px] flex items-center justify-center rounded-xl tracking-tightest">
                                ثبت سفارش
                            </Link>
                         </div>
                        </div>
                        : (<div className="text-center dark:text-orange-300 text-zinc-700">سبد خالی</div>)
                        }
                     </div>
      </div>
      </>
   )
}
export default CartInHeader;