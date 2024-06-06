import React from 'react';
import useAxiousPublic from '../../Hooks/useAxiousPublic';
import useItems from '../../Hooks/useItems';
import { useQuery } from '@tanstack/react-query';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const UserTopSellingProducts = () => {
    const axiousPublic = useAxiousPublic()
    const [items] = useItems()

    const { data: topProducts = [] } =
        useQuery({
            queryKey: ['topProducts'],
            queryFn: async () => {
                const res = await axiousPublic.get("/topProducts");
                return res.data;

            }
        })
    const dataArray = topProducts[0]?.data
    const filterItems = [];

    dataArray?.forEach(d => {
        items.map(item => {

            if (item._id == d) {
                filterItems.push(item)
            }

        })
    })
    return (
        <div>
            <div className="text-center max-w-screen-2xl container mx-auto xl:px-28 px-4">
                <h2 className="text-2xl font-bold capitalize flex mb-5">
                    Best Products:
                </h2>
            </div>
            <FeaturedProducts products={filterItems} ></FeaturedProducts>

        </div >
    );
};

export default UserTopSellingProducts;