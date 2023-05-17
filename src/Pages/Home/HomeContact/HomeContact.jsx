import React from 'react';
import timeTable from "../../../assets/contacticons/001-timetable.png"
import mapMarked from "../../../assets/contacticons/Group-35.png"
import phone from "../../../assets/contacticons/Group.png"
const HomeContact = () => {
    return (
        <div className='mt-32 py-24 px-16 grid  md:grid-cols-3 bg-[#151515] rounded-md '>
            <div className='text-white flex items-center gap-5'>
                    <img className='w-10 h-10' src={timeTable} alt="" />
                    <div className='space-y-1'>
                        <p className='font-light text-sm'>We are open monday-friday</p>
                        <h3 className='text-2xl font-medium'>7:00 am - 9:00 pm</h3>
                    </div>
            </div>
            <div className='text-white flex items-center gap-5'>
                    <img className='w-10 h-10' src={phone} alt="" />
                    <div className='space-y-1'>
                        <p className='font-light text-sm'>Have a question?</p>
                        <h3 className='text-2xl font-medium'>+2546 251 2658</h3>
                    </div>
            </div>
            <div className='text-white flex items-center gap-5'>
                    <img className='w-10 h-10' src={mapMarked} alt="" />
                    <div className='space-y-1'>
                        <p className='font-light text-sm'>Need a repair? our address</p>
                        <h3 className='text-2xl font-medium'>Liza Street, New York</h3>
                    </div>
            </div>
        </div>
    );
};

export default HomeContact;