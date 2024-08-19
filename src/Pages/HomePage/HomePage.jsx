
import Categories from '../../Component/Category/Categories';
import Poster from '../../Component/Poster/Poster';
import Poster2 from '../../Component/Poster/Poster2';

import UserBestProducts from '../UserBestProducts/UserBestProducts';
import UserTopSellingProducts from '../UserTopSellingProducts/UserTopSellingProducts';
import UserPopulatSection from '../userPopularSection/UserPopulatSection';

const HomePage = () => {
    return (
        <>
       
            <Poster2></Poster2>
            <Categories></Categories>
            <UserPopulatSection></UserPopulatSection>
            <Poster></Poster>
            <UserBestProducts></UserBestProducts>
            <UserTopSellingProducts></UserTopSellingProducts>

        </>
    );
};

export default HomePage;