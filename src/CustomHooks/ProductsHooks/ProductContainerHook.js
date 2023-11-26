import { useEffect, useState } from 'react';
import { GetAllFavProduct } from '../../Redux/Actions/WishListActions';
import { useSelector, useDispatch } from 'react-redux';
const ProductContainerHook = () => {
    // To Save Products with Red Heart
   let [loading,setLoading]=useState(true);
   let [favProduct,setFavProduct]=useState([]);
   let dispatch=useDispatch();
  useEffect(()=>{
    const getData= async()=>{
      setLoading(true);
      await dispatch(GetAllFavProduct());
      setLoading(false);
    }
    getData();
  },[]);
  let ProductsInWishlist=useSelector((state)=>state.WishListReducers.WishListProduct);
  let ProductsInWishlistData;
  try{
    if(ProductsInWishlist){
      ProductsInWishlistData=ProductsInWishlist.data
    }else{
      ProductsInWishlistData=[];
    }
  }catch(e){}
  useEffect(()=>{
    if(localStorage.getItem("token")!=null){
      if(loading===false){
        if(ProductsInWishlistData){
          setFavProduct(ProductsInWishlistData.map(itemId=>itemId._id)); 
        }
      };
    }
  },[loading]);
  return [favProduct]
}
export default ProductContainerHook
