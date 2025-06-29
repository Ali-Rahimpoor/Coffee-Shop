import { HiOutlineChevronDown } from "react-icons/hi2";
import HomeProducts from "../components/HomeProducts";
import type { TBlog, TProduct } from "../types/Type";
import Blogs from "../components/Blogs";
import AboutUs from "../components/AbouUs";
const Home = ()=>{

    const products:TProduct[] =[
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":5,
            "rating":4,
            "image":'img/products/p1.png',
            "id":1
        },
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":15,
            "rating":2,
            "image":'img/products/p2.png',
            "id":2
        },
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":50,
            "rating":5,
            "image":'img/products/p3.png',
            "id":3,
        },
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":0,
            "rating":4,
            "image":'img/products/p4.png',
            "id":4
        },
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":10,
            "rating":4,
            "image":'img/products/p5.png',
            "id":5
        },
         {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":0,
            "rating":4,
            "image":'img/products/p6.png',
            "id":6
        }, 
        {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":20,
            "rating":4,
            "image":'img/products/p7.png',
            "id":7
        },
          {
            "title":"قهوه ترک بن مانو مقدار 250",
            "price":130000,
            "discount":10,
            "rating":4,
            "image":'img/products/p8.png',
            "id":8
        },
    ]
    const blogs:TBlog[] =[
        {
            "title":"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            "day":3,
            "month":"مرداد",
            "year":1403,
            "image":"img/blogs/blog-1.png"
        },
        {
            "title":"یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
            "day":6,
            "month":"اذر",
            "year":1403,
            "image":"img/blogs/blog-2.png"
        },
        {
            "title":"یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
            "day":3,
            "month":"اذر",
            "year":1403,
            "image":"img/blogs/blog-3.png"
        },
        {
            "title":"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ادامه متن جهت طولانی شدن",
            "day":1,
            "month":"دی",
            "year":1403,
            "image":"img/blogs/blog-4.png"
        },
    ]
   return(
       <main className="" >
        {/* <!-- Home --> */}
        <section className="relative overflow-y-hidden home md:h-full h-[200px] bg-home ">
            <div className="container md:min-h-screen h-full flex justify-end items-center">
                <div className="text-white"> 
                    <h2 className="font-MorabbaBold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>
                    <span className="font-MorabbaLight text-xl md:text-5xl">یک فنجان بالانس !</span>
                    <span className=" block w-[100px] h-1 md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
                    <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl ">قطعا نام عربیکا را شنیده اید!. عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود</p>
                </div>
            </div>

            {/* <!-- For Shap on bottom --> */}
             <div className="hidden md:block">
             {/* <!-- Curve --> */}
            <img className="absolute bottom-0 left-0 right-0 mx-auto z-10" src="img/svgs/curve.svg" alt=""/>
            {/* <!-- Circle --> */}
            <div className="circle circle--lg">
                <div className="circle circle--md">
                    <div className="circle circle--sm"></div>
                </div>
            </div>
            {/* <!-- Arrow Circle --> */}
             <div className=" absolute bottom-0 left-0 right-0 mx-auto z-10 w-[30px] h-[30px] rounded-full border-2 border-orange-300 flex items-center justify-center">
              <HiOutlineChevronDown className="h-4 w-4 text-gray-700" />
             </div>
            </div>
        </section>
       
        {/* <!-- PRODUCTS --> */}
            <HomeProducts products={products} />

            <Blogs blogs={blogs}/>
            
            <AboutUs/>
          
      </main>
   )
}
export default Home;