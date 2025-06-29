import { Link } from "react-router-dom";

import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import app_logo from "../../public/img/app-logo.png";
import CartInHeader from "./CartInHeader";

type DesktopNavProps = {
    handleToggleTheme : ()=>void
}
const DesktopNav = ({handleToggleTheme}:DesktopNavProps)=>{

   return(
      <nav className="flex items-center justify-between w-full">
         <nav className="flex items-center gap-x-5 lg:gap-x-9 h-14">
            {/* <!-- Logo --> */}
            <div className="shrink-0">
                <img src={app_logo} alt="Golden Coffee"/>
            </div>
            {/* <!-- Menu --> */}
            <ul className="flex gap-x-5 xl:gap-x-10 h-full [&>*]:hover:text-orange-300 text-xl text-gray-300 tracking-tightest [&>*]:leading-[56px]">
                <li className="font-DanaMedium text-orange-200 ">
                    <Link to="/">صفحه اصلی</Link>
                </li>
                    {/* <!-- HasSub --> */}
                <li className="relative group">
                    <Link to="#" className="group-hover:text-orange-300 transition-colors delay-75">فروشگاه</Link>
                    {/* <!-- SunMenu --> */}
                    <div className="opacity-0 invisible absolute top-full  p-6 space-y-4 w-52 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white text-base group-hover:opacity-100 group-hover:visible transition-all
                     rounded-2xl border-t-[3px] border-t-orange-300 [&>*]:inline-block [&>*]:transition-colors [&>*]:hover:text-orange-300 tracking-normal shadow-shadow-normal">
                        <Link to="#">قهوه ویژه</Link>
                        <Link to="#">ویژه در سطح جهانی</Link>
                        <Link to="#">قهوه درجه یک</Link>
                        <Link to="#">ترکیبات تجاری</Link>
                        <Link to="#">کپسول قهوه</Link>
                        <Link to="#">قهوه زینو برزیلی</Link>
                    </div>
                </li>
                
                <li>
                    <Link to="#">سبد خرید</Link>
                </li>
                
                <li>
                    <Link to="#">بلاگ</Link>
                </li>
                
                <li>
                    <Link to="#">درباره ما</Link>
                </li>
                
                <li>
                    <Link to="#">تماس با ما</Link>
                </li>
            </ul>
        </nav>
          <nav className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl  text-orange-200">
            {/* <!-- cart-icon and theme toggle --> */}
            <div className="flex items-center gap-x-4 lg:gap-x-5">
                {/* <!-- Cart --> */}
                 <CartInHeader/>
                {/* <!-- Theme --> */}
                <div className="cursor-pointer" onClick={handleToggleTheme} id="toggle-theme">
                    <FaMoon className="w-8 h-8 inline-block dark:hidden"/>
                    <FiSun className="w-8 h-8 hidden dark:inline-block"/>
                </div>
            </div>
            {/* <!-- Divide Border --> */}
             <span className="w-px h-14 block bg-white/20"></span>
            {/* <!-- login Link --> */}
            <Link className="flex items-center gap-x-2.5 tracking-tightest" to="#">
             
                <HiArrowLeftEndOnRectangle className="w-8 h-8 rotate-180"/>

              <span className="hidden xl:inline-block">ورود | ثبت نام</span>
            </Link>
        </nav>
      </nav>
   )
}
export default DesktopNav;