// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/carousel.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {

  return (
    <>
      <Swiper
        slidesPerView={1.5}
        autoplay={{delay:2500}}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "bullets",
          clickable:true
        }}
        loop={true} 
        loopAdditionalSlides={1} 
        modules={[Pagination,Autoplay]}
        className="mySwiper px-3 py-5"
        style={{height:"30rem"}}
      >
        <SwiperSlide>
          <img src="/images/1200x628_v1_1_416fe3fc53.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/1200x628_v1_1_416fe3fc53.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/1200x628_v1_1_416fe3fc53.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/1200x628_v1_1_416fe3fc53.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
