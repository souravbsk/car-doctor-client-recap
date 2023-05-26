import React, { useEffect, useState } from "react";
import HeadingBanner from "../../Shareds/HeadingBanner/HeadingBanner";
import headingBanner from "../../assets/images/checkout/checkout-2.png";
import OrderRow from "./OrderRow";
import Swal from "sweetalert2";
const AllOrder = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-recap-server.vercel.app/allOrders")
    .then(res => res.json())
    .then(data => {
        setBookings(data)
    })
  }, []);



  const handleRemoveOrder = (id) => {
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
  }




  const handleStatus = (orderStatus) => {
    console.log(orderStatus);
    const {status,_id} = orderStatus;
    fetch(`https://car-doctor-recap-server.vercel.app/bookings/${_id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:status})
    })
    .then(res => res.json())
    .then(data => { 
      console.log(bookings);
      const remainData = bookings.filter(service => service._id !== _id);
      const changeStatusData = bookings.find(service => service._id === _id);

      if(changeStatusData.status == "confirm"){
        changeStatusData.status = "pending"
      }
      else{
        changeStatusData.status = "confirm"
      }
      setBookings([changeStatusData,...remainData])
      
      
    })
  }






  return (
    <div className="container">
      <HeadingBanner
        pageName="Check Out"
        headingBanner={headingBanner}
        path="Manage Orders"
      ></HeadingBanner>
      <div className="md:mb-32 mb-16 mt-16 md:mt-32">
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
              {bookings.map((order) => (
                <OrderRow handleStatus={handleStatus} handleRemoveOrder={handleRemoveOrder} key={order._id} order={order}></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
