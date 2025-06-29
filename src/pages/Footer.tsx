import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { TiPhoneOutline } from "react-icons/ti";
import { GoMail } from "react-icons/go";
import { RiTelegramLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
const Footer = ()=>{
   
   return(
      <>
      <footer className="text-zinc-300 bg-zinc-900 p-2 md:p-7">
        {/* <!-- Container --> */}
        <div className="container">
        {/* <!-- body --> */}
        <div className="flex md:flex-row flex-col gap-10 md:gap-2 items-center justify-between">
            {/* <!-- goldencoffee --> */}
            <div className="md:w-1/3 w-[70%]">
                <div className="flex items-center mb-2 gap-x-2">
                  <div className="w-10 h-10">
                    <img className="w=full h-full" src="/img/app-logo.png" alt="" />
                  </div>
               </div>
                <p className=" w-[100%] mx-auto md:w-[80%] md:ml-auto xl:w-[100%]">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
            </div>
            {/* <!-- fastservice --> */}
             <div>
                <h1 className="md:text-2xl text-lg text-center md:text-right">دسترسی سریع</h1>
                <div className="flex gap-x-1 md:gap-x-4">
                    <ul className="fast-services">
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                حریم خصوصی
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                عودت کالا
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                شرایط استفاده
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                ثبت سفارش
                            </Link>
                        </li>
                    </ul>
                    <ul className="fast-services">
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                پرسش های متداول
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                فرصت های شغلی
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                ضمانت نامه ها
                            </Link>
                        </li>
                        <li className="transition-all hover:text-orange-300">
                            <Link to="#">
                                ارتباط با ما
                            </Link>
                        </li>
                    </ul>
                </div>
             </div>
             {/* <!-- contact --> */}
              <div className="space-y-3">
                <h1 className="md:text-2xl text-lg mb-2">در تماس باشیم</h1>
                <p className="flex gap-x-2 md:text-base text-sm">
                   <FiMapPin className="md:w-5 md:h-5 w-4 h-4" />
                    آدرس : مشهد , بلوار توس , توس 97
                </p>
                <span className="inline-flex text-orange-300 gap-x-2">
                    <GoMail className="md:w-5 md:h-5 w-4 h-4" />
                    info@Coffee.com
                </span>
                <span className="inline-flex gap-x-2 mx-2">
                    <TiPhoneOutline className="md:w-5 md:h-5 w-4 h-4" />
                    09082663212   <span className="mr-3">  6789012- 021 </span>
                </span><br/>
                <Link to="#" className="inline-flex mx-1 items-center border px-3 py-1 rounded-2xl text-orange-300 border-orange-300">
                    <RiInstagramLine className="md:w-5 md:h-5 w-4 h-4"/>
                    golden_coffee@
                </Link>
                <Link to="#" className="inline-flex mx-1 items-center  px-3 py-1 rounded-2xl text-zinc-800 bg-gradient-to-r from-orange-200 to-orange-300">
                     <RiTelegramLine className="md:w-5 md:h-5 w-4 h-4"/>
                    golden_coffee@
                </Link>
              </div>
        </div>
        {/* <!-- copyright --> */}
         <div className="md:flex justify-between items-center mt-2 border-t border-t-zinc-600 pt-2 md:px-4">
            <div className="text-zinc-500 text-xs md:text-sm  ">&copy; Copyright 2024 Golden Coffe.All rights    reserved</div>
            <div className="font-sans text-xs text-zinc-500"> Ali Rahimpoor</div>
        </div>
    </div>
    </footer>
      </>
   )
}
export default Footer;