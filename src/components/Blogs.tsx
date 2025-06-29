
import { GiTreasureMap } from "react-icons/gi";
import { FiNavigation } from "react-icons/fi";
import { RiMedalFill } from "react-icons/ri";
import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import type { TBlog } from "../types/Type";

type BlogsProps = {
    blogs : TBlog[]
}
const Blogs = ({blogs}:BlogsProps)=>{
    
   return(
      <>
          {/* <!-- Category banner --> */}
         <section className="category-banner my-8 md:my-20">
            <div className="container">
                <div  className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
                    <Link to="#" className="category-banner__item1 flex flex-col justify-center pr-12  rounded-2xl h-[142px] md:h-[248px]">
                        <h5 className="font-DanaBold text-2xl md:text-4xl mb-4 md:mb-6">انواع قهوه</h5>
                        <span className="md:font-DanaMedium md:text-xl">ترکیبی و تک خواستگاه</span>
                    </Link>
                    <Link to="#" className="category-banner__item2 flex flex-col justify-center pr-12  rounded-2xl h-[142px] md:h-[248px]">
                        <h5 className="font-DanaBold text-2xl md:text-4xl mb-4 md:mb-6">پودر های فوری</h5>
                        <span className="md:font-DanaMedium md:text-xl">نسکافه هات چاکلت ماسالا</span>
                    </Link>
                </div>
            </div>
         </section>

         {/* <!-- Products Category --> */}
          <section className="products-category mb-10 md:mb-20">
            <div className="container">
                <div className="flex-center gap-[15px] md:gap-[50px] flex-wrap">
                    <div className="w-20 md:w-50 text-center">
                        <Link to="#">
                            <img src="img/categories/category1.png" loading="lazy" alt=""/>
                        </Link>
                        <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">قهوه دمی و اسپرسو</span>
                    </div>
                    <div className="w-20 md:w-50 text-center">
                        <Link to="#">
                            <img src="img/categories/category2.png" loading="lazy" alt=""/>
                        </Link>
                        <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">لوارم جانبی و تجهیزات</span>
                    </div>
                    <div className="w-20 md:w-50 text-center">
                        <Link to="#">
                            <img src="img/categories/category3.png" loading="lazy" alt=""/>
                        </Link>
                        <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">اسپرسو ساز</span>
                    </div>
                    <div className="w-20 md:w-50 text-center">
                        <Link to="#">
                            <img src="img/categories/category4.png" loading="lazy" alt=""/>
                        </Link>
                        <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">پک تستر قهوه</span>
                    </div>
                    <div className="w-20 md:w-50 text-center">
                        <Link to="#">
                            <img src="img/categories/category5.png" loading="lazy" alt=""/>
                        </Link>
                        <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">قهوه ترک</span>
                    </div>
                </div>
            </div>
          </section>

        

           {/* <!-- Coffe Club --> */}
            <section className="coffe-club mb-8 md:mb-20">
                <div className="container">
                    
                    <div className="flex lg:flex-row  flex-col gap-y-6 justify-between  items-center text-white bg-gradient-to-r from-emerald-500 to bg-emerald-600 p-3 md:px-11 md:h-[254px]  lg:h-36 rounded-2xl">
                        {/* <!-- Title --> */}
                        <div className="flex items-center gap-x-3 md:gap-x-6 ">
                            <img src="img/club/diamond.png" className="w-[87px] md:w-[110px]" />
                            <div>
                                <h4 className="font-MorabbaBold md:text-5xl text-2xl  mb-2">کافی کلاب</h4>
                                <p className="font-MorabbaLight md:text-2xl text-base">میدونستی میتونی با امتیاز هات قهوه بگیری؟</p>
                            </div>
                        </div>
                    
                         <div className="flex items-center gap-x-1  md:gap-x-10 lg:mr-auto">
                            {/* <!-- misions --> */}
                            <div className="">
                            <div className="flex gap-x-2 md:gap-x-5">
                                <div className="[50px] p-2 h-[78px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1 md:pt-5 md:pb-1 rounded-2xl text-center">
                                    <GiTreasureMap className="w-10 mx-auto h-10 md:w-12 md:h-12 mb-1 md:mb-1.5"/>
                                    <span className="text-xs md:text-sm">چرخ و بخت</span>
                                </div>
                                <div className="[50px] p-2 h-[78px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1 md:pt-5 md:pb-1 rounded-2xl text-center">
                                    <FiNavigation  className="w-10 mx-auto h-10 md:w-12 md:h-12 mb-1 md:mb-1.5"/>
                                    <span className="text-xs md:text-sm">ماموریت ها</span>
                                </div>
                                <div className="[50px] p-2 h-[78px] md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1 md:pt-5 md:pb-1 rounded-2xl text-center">
                                    <RiMedalFill  className="w-10 mx-auto h-10 md:w-12 md:h-12 mb-1 md:mb-1.5"/>
                                    <span className="text-xs md:text-sm">جایزه ها</span>
                                </div>
                            </div>
                            </div>
                            {/* <!-- perks --> */}
                            <div className="text-white  w-[100px] md:w-[110px]">
                            <div className="pr-2">
                                <h2 className="font-DanaBold text-2xl md:text-3xl">0</h2>
                                <span className="font-Dana text-xs md:text-sm">امتیاز شما</span>
                            </div>
                            <Link to="#" className="flex w-full justify-between items-center text-xs md:text-xs gap-x-1  p-2 bg-gradient-to-r from-rose-200 to-rose-300 rounded-full ">
                                دریافت جایزه شما
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Blog --> */}
             <section className="blog mb-8 md:mb-10">
                <div className="container">
                    {/* <!-- Section Head --> */}
                    <div className="flex justify-between  items-end mb-5 md:mb-12">
                    <div>
                        <h3 className="section-title">مطالب خواندنی</h3>
                    </div>
                    <div className="flex gap-x-2 md:gap-x-[10px] text-orange-300 transition-all p-2 rounded-lg cursor-pointer hover:bg-orange-200/20">
                       مشاهده همه مطالب
                       <HiChevronLeft className="w-4 h-4"/>
                    </div>
                    </div>
                    {/* <!-- Blogs --> */}
                    <ul className="grid place-items-center gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                        {blogs.map((blog,index)=>(
                        <li className="blog-page" key={index}>
         {/* <!-- img --> */}
                            <div className="rounded-t-lg overflow-hidden mb-3 md:mb-6">
                                <img src={blog.image} alt=""/>
                            </div>
                            {/* <!-- content --> */}
                            <div className="flex justify-between items-center">
                                {/* <!-- text --> */}
                                <div className="md:w-[70%] w-[80%] pr-5 cursor-pointer text-base md:text-sm line-clamp-2 md:line-clamp-3 h-12 md:h-15">
                                   {blog.title}
                                </div>
                                {/* <!-- date --> */}
                                 <div className="mr-auto">
                                    <div className="px-2 border-r border-r-white/10  flex flex-col items-center text-teal-600 dark:text-emerald-500">
                                    {/* <!-- day --> */}
                                    <span className="font-DanaBold">{blog.day}</span>
                                    <span className="font-DanaBold">{blog.month}</span>
                                    <span className="font-DanaBold">{blog.year}</span>
                                    </div>
                                </div>
                            </div>
                        </li>))}
                    </ul>
                </div>
             </section>
      </>
   )
}
export default Blogs;