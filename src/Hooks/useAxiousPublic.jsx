import axios from "axios";

const axiousPublic =axios.create({
    baseURL:'https://magnetic-plus-server.onrender.com/'
})
 
const useAxiousPublic = () => {
    return axiousPublic
};

export default useAxiousPublic; 
 