// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// // Define a type for the Swiper instance
// type SwiperInstance = Swiper | null;

// // Define the props type
// type DetailCardProps = {
//   images: string[];
// };

// export default function DetailCard({ images }: DetailCardProps) {
//   console.log(images);
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance>(null);

//   return (
//     <>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         spaceBetween={10}
//         navigation
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {images.map((imageUrl, index) => (
//           <SwiperSlide key={index}>
//             <img src={imageUrl} alt={`Image ${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode
//         watchSlidesProgress
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {images.map((imageUrl, index) => (
//           <SwiperSlide key={index}>
//             <img src={imageUrl} alt={`Thumbnail ${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
