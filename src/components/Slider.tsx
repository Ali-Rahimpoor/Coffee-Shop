// src/components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { TbShoppingCartDiscount } from "react-icons/tb";
import SlideImg1 from "../../public/img/products/p3.png"
import SlideImg2 from "../../public/img/products/p6.png"
import SlideImg3 from "../../public/img/products/p4.png"
const MySwiper = () => {
  return (

    <div className='shadow-xl rounded mx-auto relative'>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:5000,
        disableOnInteraction: false,
      }}

    >
      <SwiperSlide className='flex items-center justify-center'>
        <span className='absolute md:p-3 p-2 rounded-2xl md:text-2xl lg:text-6xl md:right-14 top-0 md:top-14 md:left-auto left-10 bg-white/75 dark:bg-black/75 font-MorabbaLight text-zinc-800 dark:text-orange-300'>قهوه برزیلی</span>
        <img src={SlideImg1} className='mx-auto w-40 md:w-auto' alt="Slide 1" />
        <TbShoppingCartDiscount className='absolute 2xl:block hidden left-30 top-25 w-30 h-30 text-zinc-700 dark:text-orange-300'/>
      </SwiperSlide>
      <SwiperSlide>
          <span className='absolute md:p-3 p-2 rounded-2xl md:text-2xl lg:text-6xl md:right-14 top-0 md:top-14 md:left-auto left-10 bg-white/75 dark:bg-black/75 font-MorabbaLight text-zinc-800 dark:text-orange-300'>قهوه مخصوص</span>
        <img src={SlideImg2} className='mx-auto w-40 md:w-auto' alt="Slide 2" />
        <TbShoppingCartDiscount className='absolute 2xl:block hidden left-30 top-25 w-30 h-30 text-zinc-700 dark:text-orange-300'/>
      </SwiperSlide>
      <SwiperSlide>
          <span className='absolute md:p-3 p-2 rounded-2xl md:text-2xl lg:text-6xl md:right-14 top-0 md:top-14 md:left-auto left-10 bg-white/75 dark:bg-black/75 font-MorabbaLight text-zinc-800 dark:text-orange-300'>پودر قهوه</span>
        <img src={SlideImg3} className='mx-auto w-40 md:w-auto' alt="Slide 3" />
        <TbShoppingCartDiscount className='absolute 2xl:block hidden left-30 top-25 w-30 h-30 text-zinc-700 dark:text-orange-300'/>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default MySwiper;
