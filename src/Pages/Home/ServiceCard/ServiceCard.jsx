import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
        <p className="primary font-semibold">Price: {price}</p>
        <Link to={`/Checkout/${_id}`}>
          <button className="primary text-xl"><FaArrowRight></FaArrowRight></button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
