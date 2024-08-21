import axios from "axios";

const axiousPublic =axios.create({
    baseURL:'https://magneticplus.sirony.me/'
})
 
const useAxiousPublic = () => {
    return axiousPublic
};

export default useAxiousPublic; 
 