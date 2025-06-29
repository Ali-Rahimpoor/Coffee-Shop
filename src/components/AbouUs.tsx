import { Link } from "react-router-dom";
import { PiPhone } from "react-icons/pi";
const AboutUs = ()=>{

   return(
      <>
            {/* <!-- Contact --> */}
              <section className="contact mt-20 md:mt-30 mb-20">
                <div className="container">
                    <div className="flex md:flex-row flex-col items-center">
                        {/* <!-- img --> */}
                        <div className="w-1/2">
                            <img src="img/contact.png" alt=""/>
                        </div>
                        {/* <!-- content --> */}
                        <div className="text-zinc-700 dark:text-white space-y-3 text-center md:text-right">
                            <h1 className="text-2xl md:text-4xl font-MorabbaBold">یکی از بهترین قهوه ها !</h1>
                            <h5 className="font-MorabbaLight mr-1 md:text-xl ">کیفیت قهوه را از ما بخواهید ...</h5>
                            <p className="text-2xl font-DanaBold text-zinc-400 mr-2">...</p>
                            <p className="md:text-xl md:w-[80%] w-[70%] mx-auto md:m-0">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                            <Link to="#" className="border my-2 border-orange-300 rounded-full p-2 text-orange-300 inline-flex items-center gap-x-2">
                                ثبت سفارش تلفنی
                               <PiPhone className="w-4 h-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
              </section>

              {/* <!-- Services --> */}
               <section className="services mb-20">
               <div className="container">
                <div className="grid grid-cols-2 place-items-center md:justify-between md:flex gap-3">
                    <div className="text-zinc-800  dark:text-white flex md:flex-row flex-col gap-x-2">
                    {/* <!-- img --> */}
                    <div>
                       <img src="img/svgs/services/support.svg" alt=""/>
                    </div>
                    {/* <!-- content --> */}
                    <div>
                        <h2 className="font-DanaBold text-sm lg:text-lg mb-2 ">پشتیبانی شبانه روزی</h2>
                        <p className="md:text-sm text-xs tracking-tighter">7 روز هفته ، 24 ساعته</p>
                    </div>
                    </div>
                    <div className="text-zinc-800 dark:text-white flex md:flex-row flex-col gap-x-2">
                        {/* <!-- img --> */}
                        <div>
                           <img src="img/svgs/services/express-delivery.svg" alt=""/>
                        </div>
                        {/* <!-- content --> */}
                        <div>
                            <h2 className="font-DanaBold  text-sm lg:text-lg mb-2 ">امکان تحویل اکسپرس</h2>
                            <p className="md:text-sm text-xs tracking-tighter">ارسال بسته با سرعت باد</p>
                        </div>
                    </div>
                    <div className="text-zinc-800 dark:text-white flex md:flex-row flex-col gap-x-2">
                            {/* <!-- img --> */}
                            <div>
                               <img src="img/svgs/services/coffee.svg" alt=""/>
                            </div>
                            {/* <!-- content --> */}
                            <div>
                                <h2 className="font-DanaBold  text-sm lg:text-lg mb-2 ">رست تخصصی</h2>
                                <p className="md:text-sm text-xs tracking-tighter">تازه برشته شده و با کیفیت</p>
                            </div>
                    </div>
                    <div className="text-zinc-800 dark:text-white flex md:flex-row  flex-col gap-x-2">
                                {/* <!-- img --> */}
                                <div>
                                   <img src="img/svgs/services/pitcher.svg" alt=""/>
                                </div>
                                {/* <!-- content --> */}
                                <div>
                                    <h2 className="font-DanaBold  text-sm lg:text-lg mb-2 ">اکسسوری قهوه</h2>
                                    <p className="md:text-sm text-xs tracking-tighter">وسایل و ادوات دم آوری</p>
                                </div>
                    </div>
                                
                    
                 </div>
                </div>    
               
               </section>
  
      </>
   )
}
export default AboutUs;