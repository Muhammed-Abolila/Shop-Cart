import axios from "axios";
export const useGetData=async()=>{
    let response=await axios.get("http://127.0.0.1:8000/api/v1/categories");
    return response.data
};
