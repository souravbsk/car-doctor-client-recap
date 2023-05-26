import React from "react";
import headingBanner from "../../assets/images/checkout/checkout.png";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const location = useLocation();
  const path = location?.pathname.split("/")[1];
  const serviceData = useLoaderData();
  const {service_id,title,img,price,_id} = serviceData;

  const handleOrderConfirm = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const newOrder = {
        service_id,title,img,price,date,name,phone,email
    }
    fetch("https://car-doctor-recap-server.vercel.app/bookings",{
        method:"POST",
        headers:{
            'content-type': "application/json"
        },
        body:JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Order Confirm',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })

  }



  return (
    <div className="container">
      <HeadingBanner
        path={path}
        pageName="Check Out"
        headingBanner={headingBanner}
      ></HeadingBanner>
      <div className="mt-32 p-24 rounded-md bg-gray-100">
        <h2 className="text-center mb-5">Service Name: {title}</h2>
        <form onSubmit={handleOrderConfirm}>
          <div className="flex items-center gap-6 mb-6">
          <div className="form-control w-full">
            <label className="">
              <input
              name="name"
                type="text"
                placeholder="First Name"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="">
              <input
              name="date"
                type="date"
                placeholder="Last Name"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          </div>
          <div className="flex items-center gap-6 mb-6">
          <div className="form-control w-full">
            <label className="">
              <input
              name="phone"
                type="text"
                placeholder="Your Phone"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="">
              <input
              name="email"
                type="text"
                placeholder="Your Email"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          </div>
          <div className="form-control w-full">
   
              <textarea  type="text"
              name="message"
                placeholder="Your Message"
                className="input w-full p-3 h-56 resize-none input-bordered">

              </textarea>
               
          </div>
          <button className="btn btn-block border-0 mt-6 bg-[#FF3811]">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
