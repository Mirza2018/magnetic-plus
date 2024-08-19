
// import { useEffect, useState } from 'react';
// import useAxiousPublic from './useAxiousPublic';
// import { useQuery } from '@tanstack/react-query';

// const useItems = () => {
// const axiousPublic=useAxiousPublic()


// const {data:items=[],refetch,isPending:loading}=
// useQuery({
//     queryKey: [ 'items'],
//     queryFn: async () => {
//         const res = await axiousPublic.get("/items");
//         return res.data;
//     }
// })
// return [items,refetch,loading] 
// }
// export default useItems;



// const [items,setItems]=useState([]);


// useEffect(()=>{





// },[])


import useAxiousPublic from './useAxiousPublic';
import { useQuery} from '@tanstack/react-query';

const useItems = () => {
    const axiousPublic = useAxiousPublic();


    const { data: items = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiousPublic.get("/items");
            return res.data;
        },
        // staleTime:  1, // 5 minutes
        // cacheTime:  10, // 10 minutes
    });



    return [items, refetch, loading];
}

export default useItems;






// Prefetching data (this can be done in a higher-level component or during navigation)
// const queryClient = new QueryClient();

// const prefetchItems = async () => {
//   await queryClient.prefetchQuery('items', async () => {
//     const axiousPublic = useAxiousPublic();
//     const res = await axiousPublic.get("/items");
//     return res.data;
//   });
// };

// Call prefetchItems during SSR or on certain navigation events
