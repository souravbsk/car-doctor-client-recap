import React from 'react';

const HeadingBanner = ({headingBanner,path,pageName}) => {
    return (
        <div className=" relative rounded-2xl overflow-hidden">
        <img className="w-full h-48 md:h-[300px]" src={headingBanner} alt="" />
        <div className=" p-12 md:px-[100px] md:py-[123px] flex items-center w-full  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] absolute top-0">
          <h2 className="text-white text-2xl md:text-5xl font-semibold">{pageName}</h2>
        </div>
        <div className=" flex items-center justify-center div-clipPath bg-[#FF3811] h-12 w-72 absolute bottom-0 left-1/2 -translate-x-1/2">
          <p className="text-white text-sm md:text-base">Home/{path}</p>
        </div>
      </div>
    );
};

export default HeadingBanner;