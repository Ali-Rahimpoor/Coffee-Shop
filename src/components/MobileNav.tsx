import { FaBars } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CartMobile from "./CartMobile";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

type MobileNavProps = {
    handleToggleTheme : ()=>void
}
const MobileNav = ({handleToggleTheme}:MobileNavProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartQty = useSelector((state:RootState)=>state.cart.cartTotalQty);  
  const closeAll = () => {
    setIsNavOpen(false);
    setIsCartOpen(false);
    setIsSubMenuOpen(false);
  };

  const handleCloseCart = ()=>{
    setIsCartOpen(false)
  }

  return (
    <>
      {/* Nav icon */}
      <button className="nav-icon" onClick={() => setIsNavOpen(true)}>
        <FaBars className="dark:text-white w-7 h-7 mr-2" />
      </button>
      {/* Logo */}
        <div className="w-30">
            <img src="/img/svgs/logo-type.svg" alt="logo" />
        </div>
      {/* Cart icon */}
      <button className="relative cart-icon" onClick={() => setIsCartOpen(true)}>
        <RiShoppingCart2Line className="w-8 h-8 dark:text-white ml-2" />
        <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartQty ?? 0}
              </span>
      </button>

      {/* Overlay */}
      {(isNavOpen || isCartOpen || isSubMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={closeAll}
        ></div>
      )}

      {/* Nav */}
      <div
        className={`nav transition-all fixed top-0 bottom-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20 overflow-y-auto ${isNavOpen ? "right-0" : "-right-64"}`}
      >
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
          <div className="flex gap-x-3.5">
          </div>
          <button className="nav-close" onClick={() => setIsNavOpen(false)}>
            <IoClose className="w-5 h-5 text-zinc-600 dark:text-white" />
          </button>
        </div>

        <ul className="dark:text-white text-zinc-600 [&>*]:pr-2.5 space-y-6">
          <li className="flex items-center bg-orange-200/20 text-orange-300 pr-0 h-10 rounded-md">
            <Link to={'#'} className="flex items-center gap-x-2">
              صفحه اصلی
            </Link>
          </li>

          <li>
            <div className="flex items-center justify-between">
              <Link to={'#'} className="flex items-center gap-x-2">
                فروشگاه
              </Link>
              <button
                className="submenu-btn"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
              </button>
            </div>
            <div
              className={`submenu flex flex-col gap-y-1 pl-4 mt-2 ${
                isSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link to={'#'}>قهوه ویژه</Link>
              <Link to={'#'} className="submenu__item--active">
                ویژه در سطح جهانی
              </Link>
              <Link to={'#'}>قهوه درجه یک</Link>
              <Link to={'#'}>ترکیبات تجاری</Link>
              <Link to={'#'}>کپسول قهوه</Link>
              <Link to={'#'}>قهوه زینو برزیلی</Link>
            </div>
          </li>

          <li>
            <Link to={'#'} className="flex items-center gap-x-2">
              دیکشنری
            </Link>
          </li>
          <li>
            <Link to={'#'} className="flex items-center gap-x-2">
              درباره ما
            </Link>
          </li>
          <li>
            <Link to={'#'} className="flex items-center gap-x-2">
              بلاگ
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center gap-x-2">
              تماس با ما
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-start gap-y-6 text-zinc-700 dark:text-orange-300 py-8 mt-8 px-2.5 border-t border-t-gray-100 dark:border-t-white/10">
          <Link to="#" className="inline-flex items-center gap-x-2">
              <HiArrowLeftEndOnRectangle className="w-6 h-6"/>
            ورود | ثبت‌نام
          </Link>

          <button onClick={handleToggleTheme} id="toggle-theme-mobile" className="cursor-pointer inline-block">
            <div className="flex items-center gap-x-2 dark:hidden">
                    <FaMoon className="w-5 h-5"/>
              <span>تم تیره</span>
            </div>
            <div className="hidden dark:flex items-center gap-x-2">
                    <FiSun className="w-5 h-5"/>
              <span>تم روشن</span>
            </div>
          </button>
        </div>
      </div>

      {/* Cart */}
      <div
        className={`cart flex flex-col transition-all fixed top-0 bottom-0 w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 overflow-y-auto ${isCartOpen ? "left-0" : "-left-64"}`}
      >
        <CartMobile handleCloseCart={handleCloseCart} />
      </div>
    </>
  );
};

export default MobileNav;
