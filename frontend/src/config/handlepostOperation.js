import axios from "axios"
import { BASE_URL } from "./constants.js"
 
  export const handlePostOperation = async (URL,data) => {
    try{
      const result = await axios.post(`${BASE_URL}${URL}`,data);
    
      return result;
    }catch(error){
      
      return error;
    }
    
  };

  