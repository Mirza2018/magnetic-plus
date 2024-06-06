import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navber from '../../Component/Navber/Navber';
import Navbar2 from '../../Component/Navber/Navbar2';
import FooterSection from '../FooterSection/FooterSection';

const Home = () => {

    return (
        <div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;