// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReferencesCard from "./referencesCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/references.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        loopAdditionalSlides={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1200: {
            slidesPerView: 3, // 1200px ve üzeri ekranlar için 3 kart
          },
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
          <ReferencesCard></ReferencesCard>
        </SwiperSlide>
        <SwiperSlide>
          <ReferencesCard></ReferencesCard>
        </SwiperSlide>
        <SwiperSlide>
          <ReferencesCard></ReferencesCard>
        </SwiperSlide>
        <SwiperSlide>
          <ReferencesCard></ReferencesCard>
        </SwiperSlide>
        <SwiperSlide>
          <ReferencesCard></ReferencesCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
