import { TbShoppingCartDollar } from "react-icons/tb";
import { LuArrowRightLeft } from "react-icons/lu";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
import type { TProduct } from "../types/Type";
import { calculateDiscount, TomanConvertor } from "../utils/utils";
import MySwiper from "./Slider";
import { useDispatch,} from "react-redux";
import { addToCart, getTotals } from "../features/cartSlice";
type HomeProductsProps = {
    products : TProduct[];
}
const HomeProducts = ({products}:HomeProductsProps)=>{

    const dispatch = useDispatch();
    const handleAddToCart = (product:TProduct)=>{
        dispatch(addToCart(product))
        dispatch(getTotals());
    }

   return(
      <>
        {/* Products */}
        <section className="products mb-9 md:mb-10">
            <div className="container">
                {/* <!-- Products Head --> */}
                <div className="flex justify-between items-end mb-5 md:mb-12">
                    <div>
                        <h3 className="section-title">جدید ترین محصولات</h3>
                        <span className="section-subtitle">فراوری شده از دانه قهوه</span>
                    </div>
                    <Link to="#" className="section-link">
                        <span className="hidden md:inline">مشاهده همه محصولات</span>
                        <span className="md:hidden inline">مشاهده همه</span>
                        
                       <HiChevronLeft className="w-4 h-4"/>
                    </Link>
                </div>
                {/* <!-- Products Body  --> */}
                 <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 [&>*]:dark:bg-zinc-700 [&>*]:bg-white [&>*]:rounded-2xl [&>*]:shadow-shadow-normal [&>*]:md:p-5 [&>*]:p-2">
                    {
                        products.map((product,index)=>(
                            <li key={index}>
                                 {/* <!-- Product Img --> */}
                        <div className="relative mb-2 md:mb-5">
                            <img src={product.image} loading="lazy" alt={product.title} className="w-28 mx-auto md:w-auto"/>
                            { product.discount !==0 ?
                            <span className="absolute top-1 right-1 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px]  bg-orange-300 font-DanaBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">{product.discount}%</span> : (null)}
                        </div>
                        {/* <!-- Product Title --> */}
                        <h5 className="font-DanaMedium text-sm md:text-xl h-[40px] md:h-[56px]  text-zinc-700 dark:text-white line-clamp-2">
                            {product.title}
                        </h5>
                        {/* <!-- Product Price --> */}
                        <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                            {/* <!-- Off --> */}
                            <div className="text-teal-600 dark:to-emerald-500">
                                <span className="font-DanaBold text-xs md:text-xl">{TomanConvertor(calculateDiscount(product.price,product.discount))}</span>
                                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
                            </div>
                           { product.discount !==0 ? <div className="offer">
                                {/* <!-- Real price --> */}
                                <span className="text-xs md:text-xl">
                                    {TomanConvertor(product.price)}
                                </span>
                                <span className="hidden xl:inline text-xs md:text-sm tracking-tighter">تومان</span>
                            </div> : null
                            }
                        </div>
                        {/* <!-- Icons --> */}
                        <div className="mt-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-x-2.5 md:gap-x-3">
                                {/* <!-- ShoppingCart --> */}
                                <button onClick={()=>handleAddToCart(product)} className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full text-gray-400 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
                                    <TbShoppingCartDollar className="md:w-6 md:h-6 w-4 h-4"/>
                                </button>
                                {/* <!-- ArrowRightLeft --> */}
                                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full text-gray-400  hover:text-orange-400 dark:hover:text-orange-400 transition-all cursor-pointer">
                                    <LuArrowRightLeft className="md:w-6 md:h-6 w-4 h-4"/>
                                </span>
                            </div>
                            <div className="text-yellow-400 flex  gap-x-1 justify-between">
                                <span className="md:text-lg text-sm">{product.rating}</span>
                                <FaRegStar className="h-4 w-4 md:w-6 md:h-6"/>
                            </div>
                        </div>
                            </li>
                        ))
                    }
                   
                 </ul>
                 </div>
        </section>
               {/* <!-- Best Selling --> */}
        <section className="best-selling container pt-8 md:pt-20 lg:pt-48">
                           <div className="flex justify-between items-end mb-5 md:mb-12">
                    <div>
                        <h3 className="section-title">تخفیف ویژه</h3>
                        <span className="section-subtitle">محصولات پیشنهادی</span>
                    </div>
                    <Link to="#" className="section-link">
                        <span className="">مشاهده تخفیفات</span>                    
                       <HiChevronLeft className="w-4 h-4"/>
                    </Link>
                </div>
             <MySwiper/>
        </section>
      </>
   )
}
export default HomeProducts;