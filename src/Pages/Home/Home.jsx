
import { Outlet } from 'react-router-dom';
import Navbar2 from '../../Component/Navber/Navbar2';
import FooterSection from '../FooterSection/FooterSection';
import SearchBar from '../../Component/SearchBar/SearchBar';

const Home = () => {

    return (
        <div>
            <SearchBar></SearchBar>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;