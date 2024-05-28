import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Categories from '../../Component/Category/Categories';
import Products from '../../Component/Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Products></Products>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;