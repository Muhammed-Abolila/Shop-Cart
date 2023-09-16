import { useState, useEffect } from "react";
import ProductsSearchPageHook from '../ProductsHooks/ProductsSearchPageHook';
const NavbarLoginHook = () => {
    let [items,pagination,getPageCount,getProduct]=ProductsSearchPageHook()
    let [searchWord,setSearchWord]=useState('');
    let searchWordStorage='';
      if(localStorage.getItem("searchWord")!=null){
        searchWordStorage = localStorage.getItem("searchWord")
      }
    const onChangeSearchword=(e)=>{
      let path=window.location.pathname;
      if(path!="/products"){
        window.location.href="/products"
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
    return [searchWordStorage,onChangeSearchword]
}
export default NavbarLoginHook
