import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const About = () => {
  
  return (
    <div className="w-screen h-screen flex items-center justify-center relative font-ubuntu" id="about">
      <div className="flex items-center justify-center text-white absolute z-30 pl-20 gap-20">
        <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[50rem] h-[32rem] p-10"
        >
        <SwiperSlide>
          <img src="coffeeshop1.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="coffeeshop2.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
        <div className="w-[600px] flex flex-col text-white mr-24">
          <h2 className="text-latte-gray text-[2.5rem] mb-8 font-ubuntu">
            About
          </h2>
          <p className="text-xl">
            Latte is a coffee company that was born from an idea by Ben Sekiro. He was a competent software developer who loved coffee. As coffee fan,
            he decided to start his own brand in 1967 with the simple objective of giving good quality at a good price.
            That is why we are one of the companies most chosen by critics and daily customers of our stores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;