import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLimitBrandsApi } from '../../Redux/Actions/BrandActions';
const AllBrandsPageHook = () => {
    let Brands=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
    let Loading=useSelector((state)=>state.BrandReducer.Loading);
    let AllBrandsData,Pagination;
    if(Brands.data){
      AllBrandsData=Brands.data;
      Pagination=Brands.paginationResult.numberOfPages
    }else{
      AllBrandsData=[];
      Pagination={}
    }
    let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getLimitBrandsApi(1))
    },[]);
    function getPageCount(param){
      dispatch(getLimitBrandsApi(param))
    }
  return [AllBrandsData,Loading,Pagination,getPageCount]
}
export default AllBrandsPageHook
