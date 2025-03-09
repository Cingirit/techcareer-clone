// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FromYou from "./FromYou";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../css/references.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{ delay: 500 }}
        loop={true}
        loopAdditionalSlides={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2, // 768px ve üzeri ekranlar için 2 kart
          },
          576: {
            slidesPerView: 1, // 576px ve üzeri ekranlar için 1 kart
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <FromYou></FromYou>
        </SwiperSlide>
        <SwiperSlide>
          <FromYou></FromYou>
        </SwiperSlide>
        <SwiperSlide>
          <FromYou></FromYou>
        </SwiperSlide>
        <SwiperSlide>
          <FromYou></FromYou>
        </SwiperSlide>
        <SwiperSlide>
          <FromYou></FromYou>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
