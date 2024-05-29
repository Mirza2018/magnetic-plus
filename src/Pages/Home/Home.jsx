import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;