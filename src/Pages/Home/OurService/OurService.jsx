import React, { useEffect, useState } from "react";
import HeadingText from "../../../Shareds/HeadingText/HeadingText";
import ServiceCard from "../ServiceCard/ServiceCard";


const OurService = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-recap-server.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])

    
    
    const headingText = {
        subTitle: "Service",
        title: "Our Service Area",
        pera: "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      };
  return (
    <div className="mt-16 md:mt-32">
      <HeadingText headingText={headingText}></HeadingText>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {
        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default OurService;
