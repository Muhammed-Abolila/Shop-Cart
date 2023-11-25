import { useState, useEffect } from "react";
import ProductsSearchPageHook from '../ProductsHooks/ProductsSearchPageHook';
import { useNavigate } from "react-router";
const NavbarLoginHook = (getProduct) => {
    let Navigate=useNavigate();
    let [user,setUser]=useState("");
    let [searchWord,setSearchWord]=useState('');
    let searchWordStorage='';
      if(localStorage.getItem("searchWord")!=null){
        searchWordStorage = localStorage.getItem("searchWord")
      }
    const onChangeSearchword=(e)=>{
      let path=window.location.pathname;
      if(path!="/products"){
        Navigate("/products")
      }
      localStorage.setItem("searchWord",e.target.value)
      setSearchWord(e.target.value);
    }   
    useEffect(()=>{
      // Using SetTimeOut to delay request to server
      setTimeout(()=>{
        getProduct('');
        },1000)
    },[searchWord]);

    
    useEffect(()=>{
      if(localStorage.getItem("user")!=null){
        setUser(JSON.parse(localStorage.getItem("user")));
      }
    },[])
    const logOut=()=>{
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser("");
    }
    let sidebar=document.getElementById("sidebar");
    const openSideBar=()=>{
      sidebar.style.left="0"
    }
    const closeSideBar=()=>{
      sidebar.style.left="-100%" 
  }

    return [searchWordStorage,onChangeSearchword,logOut,openSideBar,closeSideBar,user]
}
export default NavbarLoginHook
