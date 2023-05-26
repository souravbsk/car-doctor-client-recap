import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import AboutUs from '../../../Shareds/AboutUs/AboutUs';
import HomeContact from '../HomeContact/HomeContact';
import OurTeams from '../OurTeams/OurTeams';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div className='container'>
            <HeroBanner></HeroBanner>
            <AboutUs></AboutUs>
            <OurService></OurService>
            <HomeContact></HomeContact>
            <OurTeams></OurTeams>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;