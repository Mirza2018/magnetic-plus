import React, { useContext } from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';


const Home = () => {
    const {user}=useContext(AuthContext)
    console.log("This is user",user);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;