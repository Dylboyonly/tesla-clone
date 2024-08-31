"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";

export default function ProductApp() {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[100%] w-[30vw] bg-black">
            <div className="w-full h-[90%] ">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1_2000.jpg" />
            </div>
            <div className="py-4 text-1xl tracking-wider px-3">
              <span>CABLE ORGANIZER</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[100%] w-[30vw] bg-black">
            <div className="w-full h-[90%]">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg" />
            </div>
            <div className="py-4 text-1xl tracking-wider px-3">
              <span>CABLE ORGANIZER</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[100%] w-[30vw] bg-black">
            <div className="w-full h-[90%] ">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg" />
            </div>
            <div className="py-4 text-1xl tracking-wider px-3">
              <span>CABLE ORGANIZER</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[100%] w-[30vw] bg-black">
            <div className="w-full h-[90%] ">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg" />
            </div>
            <div className="py-4 text-1xl tracking-wider px-3">
              <span>CABLE ORGANIZER</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[100%] w-[30vw] bg-black">
            <div className="w-full h-[90%] ">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A-02-01.png" />
            </div>
            <div className="py-4 text-1xl tracking-wider px-3">
              <span>CABLE ORGANIZER</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
