import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const HeroBanner = () => {
  return (
    <div>
      <Swiper
      autoplay={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper hero-banner"
      >
        <SwiperSlide>
          <div className="hero-div">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner1}
              alt=""
            />
            <div className="absolute p-8 md:p-24 h-full flex flex-col md:flex-row items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-ful space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-div">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner2}
              alt=""
            />
            <div className="absolute p-8 md:p-24 h-full flex flex-col md:flex-row items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-ful space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md overflow-hidden relative">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner3}
              alt=""
            />
                <div className="absolute p-8 md:p-24 h-full md:flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-full space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md overflow-hidden relative">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner4}
              alt=""
            />
                <div className="absolute p-8 md:p-24 h-full flex flex-col md:flex-row items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-ful space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md overflow-hidden relative">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner5}
              alt=""
            />
                <div className="absolute p-8 md:p-24 h-full flex flex-col md:flex-row items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-ful space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md overflow-hidden relative">
            <img
              className=" h-96 md:h-[600px] w-full object-fill"
              src={banner6}
              alt=""
            />
                <div className="absolute p-8 md:p-24 h-full flex flex-col md:flex-row items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 -translate-y-1/2">
              <div className="max-w-ful space-y-5 text-white  w-full md:w-8/12">
                <h1 className="text-3xl md:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div>
                  <button className="primary-btn mb-5 md:mr-5">Discover More</button>
                  <button className="outline-btn">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
