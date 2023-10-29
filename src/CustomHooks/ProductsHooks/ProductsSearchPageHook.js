import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetProductSearch } from "../../Redux/Actions/ProductActions";
const ProductsSearchPageHook = () => {
  let dispatch=useDispatch()
  // to make async function and call in another componenets
  const getProduct=async()=>{
    // Search word Query
    let searchWordStorage='';
    if(localStorage.getItem("searchWord")!=null){
      searchWordStorage = localStorage.getItem("searchWord")
    };
    // Sort Type Query
    sendType();
    // Select Category Query
    let queryCategory='';
    if(localStorage.getItem("Categoryselected")!=null){
      queryCategory = localStorage.getItem("Categoryselected")
    };
    // Select Brand Query
    let queryBrand='';
    if(localStorage.getItem("Brandselected")!=null){
      queryBrand=localStorage.getItem("Brandselected")
    }
    // choose price from Query
    let priceFrom='';
    if(localStorage.getItem("startingPrice")!=null){
      priceFrom=localStorage.getItem("startingPrice")
    }
    // choose price to Query
    let priceTo='';
    if(localStorage.getItem("endingPrice")!=null){
      priceTo=localStorage.getItem("endingPrice")
    }
    await dispatch(GetProductSearch(`keyword=${searchWordStorage}&sort=${sort}&${queryCategory}&${queryBrand}&${priceFrom}&${priceTo}`));
  }
  useEffect(()=>{
    getProduct()
  },[]);
  let ProductData=useSelector((state)=>state.ProductReducer.SearchProductApi);
  let items=[], pagination=[];
  try{
    if(ProductData){
      items=ProductData;
    }else{
      items=[];
    };
  }catch(e){}
  
  try{
    if(ProductData.paginationResult){
      pagination=ProductData.paginationResult.numberOfPages;
    }else{
      pagination=0;
    };
  }catch(e){}
  // to Link Between Search and Pagination
  async function getPageCount(pageNumber){
    // Search word Query
    let searchWordStorage='';
    if(localStorage.getItem("searchWord")!=null){
      searchWordStorage = localStorage.getItem("searchWord")
    };
    // Sort Type Query
    sendType();
    // Select Category Query
    let queryCategory='';
    if(localStorage.getItem("Categoryselected")!=null){
      queryCategory = localStorage.getItem("Categoryselected")
    };
    // Select Brand Query
    let queryBrand='';
    if(localStorage.getItem("Brandselected")!=null){
      queryBrand=localStorage.getItem("Brandselected")
    }
    // choose price from Query
    let priceFrom='';
    if(localStorage.getItem("startingPrice")!=null){
      priceFrom=localStorage.getItem("startingPrice")
    }
    // choose price to Query
    let priceTo='';
    if(localStorage.getItem("endingPrice")!=null){
      priceTo=localStorage.getItem("endingPrice")
    }
    await dispatch(GetProductSearch(`page=${pageNumber}&keyword=${searchWordStorage}&sort=${sort}&${queryCategory}&${queryBrand}&${priceFrom}&${priceTo}`));
  };
  // Sort By DropDown Menu
let sortFromLocalStorage='',sort;
  const sendType=()=>{
    if(localStorage.getItem("sortType")!=null){
      sortFromLocalStorage = localStorage.getItem("sortType")
    }else{
      sortFromLocalStorage=''
    }
    if(sortFromLocalStorage==="Recommended"){
      sort=''
    }else if(sortFromLocalStorage==="Top Ratedََ"){
      sort="-ratingsQuantity"
    }else if(sortFromLocalStorage==="Best Seller"){
      sort="-sold"
    }else if(sortFromLocalStorage==="High To Low"){
      sort="-price"
    }else if(sortFromLocalStorage==="Low To High"){
      sort="+price"
    }
  };
    return [items,pagination,getPageCount,getProduct]
}
export default ProductsSearchPageHook
