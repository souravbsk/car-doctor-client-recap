import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import part from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <section className="mt-32">
      <div className="hero ">
        <div className="hero-content gap-16 items-start flex-col lg:flex-row">
          <div className="flex-1 relative">
            <img
              src={person}
              className="  w-96 h-96 object-cover object-left rounded-lg shadow-2xl"
            />
            <img
              className="w-80 absolute right-10 top-2/4 h-72 object-cover border-8 rounded-md border-white"
              src={part}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-5">
            <h3 className="text-lg font-extrabold text-[#FF3811]">About Us</h3>
            <h1 className="text-5xl pr-40 font-bold">
              We are qualified & of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="primary-btn">Get More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
