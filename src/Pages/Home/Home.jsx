import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navber from '../../Component/Navber/Navber';
import Navbar2 from '../../Component/Navber/Navbar2';

const Home = () => {

    return (
        <div>
            {/* <Header></Header>
            <Navber></Navber> */}
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;