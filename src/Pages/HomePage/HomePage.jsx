
import Categories from '../../Component/Category/Categories';
import Poster from '../../Component/Poster/Poster';
import Poster2 from '../../Component/Poster/Poster2';
import Products from '../../Component/Products/Products';
import UserBestProducts from '../UserBestProducts/UserBestProducts';

const HomePage = () => {
    return (
        <>
            <Poster></Poster>
            <Poster2></Poster2>
            <Categories></Categories>
            <UserBestProducts></UserBestProducts>
        </>
    );
};

export default HomePage;