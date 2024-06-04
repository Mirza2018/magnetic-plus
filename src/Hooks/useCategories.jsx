import React from 'react';
import useAxiousPublic from './useAxiousPublic';
import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
    const axiousPublic=useAxiousPublic()

    const {data:categories=[],refetch}=
    useQuery({
        queryKey: [ 'categories'],
        queryFn: async () => {
            const res = await axiousPublic.get("/categories");
            return res.data;
        }
    })
    return [categories,refetch] 
};

export default useCategories;