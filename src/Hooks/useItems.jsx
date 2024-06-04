
import useAxiousPublic from './useAxiousPublic';
import { useQuery } from '@tanstack/react-query';

const useItems = () => {
const axiousPublic=useAxiousPublic()

const {data:items=[],refetch,isPending:loading}=
useQuery({
    queryKey: [ 'items'],
    queryFn: async () => {
        const res = await axiousPublic.get("/items");
        return res.data;
    }
})
return [items,refetch,loading] 
}
export default useItems;
 