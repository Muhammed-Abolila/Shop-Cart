import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { getBrandsApi } from '../../Redux/Actions/BrandActions';
const SlideProductsSearchHook = (getProduct) => {
  // when first load
  let dispatch=useDispatch();
  useEffect(()=>{
    const getData=async()=>{
      await dispatch(getCategoryApi());
      await dispatch(getBrandsApi());
    }
    getData()
  },[]); 
  let category=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
  let brand=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
  let categoryData=[];
  if(category){
    categoryData=category.data
  }else{
    categoryData=[]
  };
  let brandData=[];
  if(brand){
    brandData=brand.data
  }else{
    brandData=[]
  };
// On Choose Category
  let [Categoryselected,setCategoryselected]= useState([])
  const onChooseCategory=(e)=>{
    let value=e.target.value;
    if(value==="0"&&e.target.checked===true){
      setCategoryselected([])
    }else{
      if(e.target.checked===true){
        setCategoryselected([...Categoryselected,value])
      }else if(e.target.checked===false){
        let newCategoryArray=Categoryselected.filter((id)=>id!=value);
        setCategoryselected(newCategoryArray);
      }
    };
    
  };
  // to make query string
  let queryCategory='' 
  useEffect(()=>{
    queryCategory=Categoryselected.map((category)=>"category[in][]="+category).join("&");    
    localStorage.setItem("Categoryselected",queryCategory);
    setTimeout(()=>{
      getProduct()
    },1000);
  },[Categoryselected])
  // On Choose Brand
  let [brandSelected,setBrandSelected]=useState([])
  const onChooseBrand=(e)=>{
    let brandValue=e.target.value;
    if(brandValue==="0"&&e.target.checked===true){
      setBrandSelected([])
    }else{
      if(e.target.checked===true){
        setBrandSelected([...brandSelected,brandValue])
      }else if(e.target.checked===false){
        let newBrandArray=brandSelected.filter((id)=>id!=brandValue);
        setBrandSelected(newBrandArray)
      } 
    }
  };

  // to make query string
  let queryBrand='';
  useEffect(()=>{
    queryBrand=brandSelected.map((brand)=>'brand[in][]='+brand).join("&");
    localStorage.setItem("Brandselected",queryBrand);
    setTimeout(()=>{
      getProduct()
    },1000)
  },[brandSelected]);

  // on choose starting price
  let [startingPrice,setStartingPrice]=useState("0");
  const priceFrom=(e)=>{
    setStartingPrice(e.target.value);
  };
  // on choose ending price
  let [endingPrice,setEndingPrice]=useState("0");
  const priceTo=(e)=>{
    setEndingPrice(e.target.value)
  };
  // to make query string
  let priceFromQuery,priceToQuery;
  useEffect(()=>{
    if(startingPrice==''||startingPrice<=0){
      priceFromQuery='';
    }else{
      priceFromQuery=`price[gt]=${startingPrice}`;
    }
    localStorage.setItem("startingPrice",priceFromQuery);
    if(endingPrice==''||endingPrice<=0){
      priceToQuery='';
    }else{
      priceToQuery=`price[lte]=${endingPrice}`;
    }
    localStorage.setItem("endingPrice",priceToQuery);
    setTimeout(()=>{
      getProduct()
    },1000)
  },[startingPrice,endingPrice]);
  return [categoryData,onChooseCategory,brandData,onChooseBrand,priceFrom,priceTo]
}

export default SlideProductsSearchHook
