import React from "react";
import HeadingText from "../../../Shareds/HeadingText/HeadingText";
import Guranty from "../../../assets/icons/check.svg"
import timelyDelivery from "../../../assets/icons/deliveryt.svg"
import watch from "../../../assets/icons/Group 38729.svg"
import ExpertTeam from "../../../assets/icons/group.svg"
import support from "../../../assets/icons/person.svg"
import Equipment from "../../../assets/icons/Wrench.svg"

const Features = () => {
  const headingText = {
    subTitle: "Core Features",
    title: "Why Choose Us",
    pera: "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  };
  return (
    <div className="mt-16 md:mt-32">
      <HeadingText headingText={headingText}></HeadingText>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-10">
        <div className="text-center border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={ExpertTeam} alt="" />
            <h3 className="font-semibold">Expert Team</h3>
        </div>
        <div className="text-center bg-[#FF3811] border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={watch} alt="" />
            <h3 className="font-semibold text-white">Timely Delivery</h3>
        </div>
        <div className="text-center border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={support} alt="" />
            <h3 className="font-semibold">24/7 Support</h3>
        </div>
        <div className="text-center border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={Equipment} alt="" />
            <h3 className="font-semibold">Best Equipment</h3>
        </div>
        <div className="text-center border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={Guranty} alt="" />
            <h3 className="font-semibold">100% Guaranty</h3>
        </div>
        <div className="text-center border rounded-lg p-3 md:p-6 flex flex-col justify-center items-center space-y-4">
            <img src={timelyDelivery} alt="" />
            <h3 className="font-semibold">Timely Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
