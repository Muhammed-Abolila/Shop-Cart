import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getLimitCategoryApi } from '../../Redux/Actions/CategoryAction'
const AllCategoriesPageHook = () => {
    let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi.data);
    let Pagination=useSelector((state)=>state.CategoryReducer.CategoryApi.paginationResult);
    let Loading=useSelector((state)=>state.CategoryReducer.loading);
    let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getLimitCategoryApi(1))
    },[]);
    function getPageCount(param){
      dispatch(getLimitCategoryApi(param));
    }
    let backgroundColor=["#ffd3e8","#f4dba5","#55cfdf","#8d9ddb","#60db78","#f4dba5"];
    return[CategoryData,Pagination,Loading,getPageCount,backgroundColor]
};

export default AllCategoriesPageHook;
