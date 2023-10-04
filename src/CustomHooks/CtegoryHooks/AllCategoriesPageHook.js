import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getLimitCategoryApi } from '../../Redux/Actions/CategoryAction'
const AllCategoriesPageHook = () => {
    let Category=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
    let Loading=useSelector((state)=>state.CategoryReducer.loading);
    let CategoryData,PaginationData;
    try{
      if(Category.data){
        CategoryData=Category.data;
        PaginationData=Category.paginationResult.numberOfPages
      }else{
        CategoryData=[];
        PaginationData={}
      } 
    }catch(e){}
    let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getLimitCategoryApi(1))
    },[]);
    function getPageCount(param){
      dispatch(getLimitCategoryApi(param));
    }
    let backgroundColor=["#ffd3e8","#f4dba5","#55cfdf","#8d9ddb","#60db78","#f4dba5"];
    return[CategoryData,PaginationData,Loading,getPageCount,backgroundColor]
};
export default AllCategoriesPageHook;
