import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import AboutUs from '../../../Shareds/AboutUs/AboutUs';
import HomeContact from '../HomeContact/HomeContact';
import OurTeams from '../OurTeams/OurTeams';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div className='container'>
            <HeroBanner></HeroBanner>
            <AboutUs></AboutUs>
            <HomeContact></HomeContact>
            <OurTeams></OurTeams>
            <Features></Features>
            <h1>hello world</h1>
        </div>
    );
};

export default Home;