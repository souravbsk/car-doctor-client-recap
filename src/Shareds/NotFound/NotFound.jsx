import React from 'react';
import notFoundImg from "../../assets/icons/Frame.png"
const NotFound = () => {
    return (
        <div className='container md:py-16'>
            <img className='md:w-6/12 mx-auto' src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;