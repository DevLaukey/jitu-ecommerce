import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[360px]"
      >
        <SwiperSlide className="flex items-center justify-center w-full">
          <img
            src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="brown and black rolling chair"
            className="object-cover w-full h-auto "
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="brown and black rolling chair"
            className="object-cover w-full h-auto "
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="brown and black rolling chair"
            className="object-cover w-full h-auto "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
