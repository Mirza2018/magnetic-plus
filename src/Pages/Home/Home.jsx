import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Categories from '../../Component/Category/Categories';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;