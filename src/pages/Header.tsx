
import { useDispatch, useSelector } from "react-redux";
import DesktopNav from "../components/DesktopNav";
import type { RootState } from "../app/store";
import { useEffect } from "react";
import { toggleTheme } from "../features/themeSlice";
import MobileNav from "../components/MobileNav";
const Header = ()=>{
    const theme = useSelector((state:RootState) => state.theme.theme)
    const dispatch = useDispatch();

   useEffect(() => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [theme]);

  const handleToggleTheme = ()=>{
    dispatch(toggleTheme());
  }


   return(
      <>
     <header className="fixed z-50 top-9 right-0 left-0 hidden  md:flex items-center bg-black/50 w-[98%] lg:w-[90%] py-5 px-5 lg:px-10 mx-auto h-24 rounded-3xl backdrop-blur-[6px]">
        <DesktopNav handleToggleTheme={handleToggleTheme} />
    </header>
    {/* <!-- Header for Small Devices --> */}
   <header className="flex z-50 md:hidden items-center justify-between  px-4 h-16 w-full bg-white dark:bg-zinc-700 ">
        <MobileNav handleToggleTheme={handleToggleTheme} />
   </header>
    <div className="overlay"></div>
      </>
   )
}
export default Header;