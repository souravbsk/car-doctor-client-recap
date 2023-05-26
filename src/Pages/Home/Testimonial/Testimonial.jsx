import React from "react";
import HeadingText from "../../../Shareds/HeadingText/HeadingText";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import quate from "../../../assets/icons/quote.svg";
import img1 from "../../../assets/images/testimonials/Ellipse 2.png";
import { FaStar } from "react-icons/fa";
const Testimonial = () => {
  const headingText = {
    subTitle: "Testimonial",
    title: "What Customer Says",
    pera: "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  };
  return (
    <div className="mt-16 md:mt-32">
      <HeadingText headingText={headingText}></HeadingText>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="mySwiper team-slider"
        >
          <SwiperSlide>
            <div className="border rounded-lg p-8 md:p-12 space-y-4 relative">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                <div>
                  <h2 className="text-xl font-bold">Awlad Hossain</h2>
                  <p className="font-semibold text-sm text-gray-700">
                    Businessman
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-light">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                </ul>
              </div>
              <img  src={quate} className="absolute opacity-50 md:top-10 top-20 w-12 right-0 md:right-20" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-lg p-8 md:p-12 space-y-4 relative">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                <div>
                  <h2 className="text-xl font-bold">Awlad Hossain</h2>
                  <p className="font-semibold text-sm text-gray-700">
                    Businessman
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-light">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                </ul>
              </div>
              <img  src={quate} className="absolute opacity-50 md:top-10 top-20 w-12 right-0 md:right-20" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-lg p-8 md:p-12 space-y-4 relative">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                <div>
                  <h2 className="text-xl font-bold">Awlad Hossain</h2>
                  <p className="font-semibold text-sm text-gray-700">
                    Businessman
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-light">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                </ul>
              </div>
              <img  src={quate} className="absolute opacity-50 md:top-10 top-20 w-12 right-0 md:right-20" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-lg p-8 md:p-12 space-y-4 relative">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                <div>
                  <h2 className="text-xl font-bold">Awlad Hossain</h2>
                  <p className="font-semibold text-sm text-gray-700">
                    Businessman
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-light">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                  <li>
                    <FaStar className="text-xl text-[#FF912C]"></FaStar>
                  </li>
                </ul>
              </div>
              <img  src={quate} className="absolute opacity-50 md:top-10 top-20 w-12 right-0 md:right-20" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
