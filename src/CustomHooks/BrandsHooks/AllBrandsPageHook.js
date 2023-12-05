import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLimitBrandsApi } from '../../Redux/Actions/BrandActions';
const AllBrandsPageHook = () => {
  let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getLimitBrandsApi(1))
    },[]);
    let Brands=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
    let AllBrandsData,Pagination;
    try{
      if(Brands.data){
        AllBrandsData=Brands.data;
        Pagination=Brands.paginationResult.numberOfPages
      }
    }catch(e){}
    function getPageCount(param){
      dispatch(getLimitBrandsApi(param))
    }
  return [AllBrandsData,Pagination,getPageCount]
}
export default AllBrandsPageHook
