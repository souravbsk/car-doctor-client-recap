import React from 'react';

const BookingRow = ({service,handleRemoveService}) => {
    const {price,title,_id,status,date,img} = service || {};
    return (
        <tr>
        <th>
        <button onClick={() => handleRemoveService(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 md:w-20 h-20 md:h-20">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
         {title}
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button   className={`btn hover:text-black  text-white btn-ghost btn-xs ${status === 'pending' ? "bg-[#FF3811]" : "bg-green-600"}`}>{status}</button>
        </th>
      </tr>
    );
};

export default BookingRow;