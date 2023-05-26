import React from "react";
import HeadingText from "../../../Shareds/HeadingText/HeadingText";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const OurTeams = () => {
  const headingText = {
    subTitle: "Team",
    title: "Meet Our Team",
    pera: "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  };

  return (
    <div className="md:mt-32  mt-16">
      <HeadingText headingText={headingText}></HeadingText>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="mySwiper team-slider"
        >
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team1}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team2}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team3}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team1}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team2}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card px-6 py-7 bg-base-100  border">
              <figure className="">
                <img
                  src={team3}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-5 pb-0 space-y-1 items-center text-center">
                <h2 className="card-title font-bold">Car Engine Plug</h2>
                <p className="font-semibold">Engine Expert</p>
                <div className="card-actions">
                  <ul className="flex items-center gap-2">
                    <Link className="bg-[#395185] text-white px-3 py-3 rounded-full"><li><FaFacebookF></FaFacebookF></li></Link>
                    <Link className="bg-[#55ACEE] text-white px-3 py-3 rounded-full"><li><FaTwitter></FaTwitter></li></Link>
                    <Link className="bg-[#0A66C2] text-white px-3 py-3 rounded-full"><li><FaLinkedinIn></FaLinkedinIn></li></Link>
                    <Link className="bg-[#f52c61] text-white px-3 py-3 rounded-full"><li><FaInstagram></FaInstagram></li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeams;
