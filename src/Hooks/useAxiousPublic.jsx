import axios from "axios";

const axiousPublic =axios.create({
    baseURL:'http://localhost:5000/'
})
 
const useAxiousPublic = () => {
    return axiousPublic
};

export default useAxiousPublic; 
 