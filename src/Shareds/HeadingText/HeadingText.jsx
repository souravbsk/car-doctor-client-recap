import React from 'react';

const HeadingText = ({headingText}) => {
    const {subTitle,title,pera} = headingText;
    return (
        <div className='max-w-full mb-8 md:mb-16 md:w-6/12 mx-auto text-center space-y-2 md:space-y-4'>
            <h5 className='font-extrabold text-lg text-[#FF3811]'>{subTitle}</h5>
            <h2 className='text-2xl md:text-4xl font-extrabold'>{title}</h2>
            <p className='text-sm font-light'>{pera}</p>
        </div>
    );
};

export default HeadingText;