import { useState, useEffect } from "react";
const ProtectedRoute = () => {
  let [isLoggedIn,setIsLoggedIn]=useState(JSON.parse(localStorage.getItem("user")));
  let [isUser,setIsUser]=useState(null);
  let [isAdmin,setIsAdmin]=useState(null);
  useEffect(()=>{
    if(isLoggedIn!==null){
      if(isLoggedIn.role=="user"){
        setIsUser(true);
        setIsAdmin(false)
      }else{
        setIsUser(false);
        setIsAdmin(true)
      }
    }else{
      setIsUser(false);
      setIsAdmin(false)
    }
  },[]);
  return [isUser,isAdmin]
}

export default ProtectedRoute
