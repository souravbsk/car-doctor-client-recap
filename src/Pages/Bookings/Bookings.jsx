import React, { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { AuthContext } from "../../Providers/AuthProvider";
import {HiOutlineArrowUturnLeft} from "react-icons/hi2"
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import HeadingBanner from "../../Shareds/HeadingBanner/HeadingBanner";
import bannerIMg from "../../assets/images/checkout/checkout.png"

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const path = location?.pathname?.split("/")[1];
  console.log(path);

  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctor-recap-server.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("carDoctorToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleRemoveService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-recap-server.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                const remainData = bookings.filter(service => service._id !== id);
                setBookings(remainData)
                Swal.fire("Deleted!", "Your Service has been deleted.", "success");
            
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="container">
        <HeadingBanner headingBanner={bannerIMg} pageName="Cart Details" path={path} ></HeadingBanner>
      <h1 className="text-center my-10 text-xl md:text-4xl font-medium mb-4">
        My All Bookings
      </h1>

      <div className="mb-32">
        <div className="overflow-x-auto w-full">
          <table className="table text-center w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((service) => (
                <BookingRow
                  handleRemoveService={handleRemoveService}
                  key={service._id}
                  service={service}
                ></BookingRow>
              ))}
            </tbody>

          </table>
         
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-5 md:items-center justify-between">
            <Link to="/"><button className="flex items-center gap-2"><HiOutlineArrowUturnLeft></HiOutlineArrowUturnLeft> <span>Continue Shopping</span></button></Link>
            <button className="flex items-center gap-2"><FaTrashAlt></FaTrashAlt> <span>Clear Shopping Cart</span></button>
          </div>
      </div>
    </div>
  );
};

export default Bookings;
