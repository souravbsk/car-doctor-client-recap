import React from "react";
import HeadingBanner from "../../Shareds/HeadingBanner/HeadingBanner";
import headingBanner from "../../assets/images/checkout/checkout.png";

import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const AddService = () => {
    const location = useLocation();
    const path = location?.pathname?.split("-")[1]

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.serviceName.value;
        const price = form.servicePrice.value;
        const img = form.textHere.value;
        const serviceType = form.serviceType.value;
        const description = form.description.value;
        

        const newService = {
            title,
            price,
            img,
            serviceType,
            description
        }

        fetch('https://car-doctor-recap-server.vercel.app/addService',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Added',
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
      <div className="md:mt-32 mt-16 p-8 md:p-24 rounded-md bg-gray-100">
        <form onSubmit={handleAddService}>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mb-3 md:mb-6">
            <div className="form-control w-full">
              <label className="">
                <input
                  name="serviceName"
                  type="text"
                  placeholder="Service Name"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="">
                <input
                  name="servicePrice"
                  type="text"
                  placeholder="Service Price"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mb-3 md:mb-6">
            <div className="form-control w-full">
              <label className="">
                <input
                  name="textHere"
                  type="text"
                  placeholder="Img Link"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="">
                <input
                  name="serviceType"
                  type="text"
                  placeholder="Service Type"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <textarea
              type="text"
              name="description"
              placeholder="Product Description"
              className="input w-full p-3 h-28 md:h-56 resize-none input-bordered"
            ></textarea>
          </div>
          <button className="btn btn-block border-0 mt-6 bg-[#FF3811]">
           Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
