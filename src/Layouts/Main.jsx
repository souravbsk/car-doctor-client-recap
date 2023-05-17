import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shareds/Header/Header';
import Footer from '../Shareds/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;