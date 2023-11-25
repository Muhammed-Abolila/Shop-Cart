import { useDispatch, useSelector } from 'react-redux';
import { GetAllFavProduct } from '../../Redux/Actions/WishListActions';
import { useEffect, useState } from 'react'
const UserFavProductPageHook = () => {
    let [reload,setReload]=useState(false);
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetAllFavProduct())
    },[reload]);
    let wishListProduct=useSelector((state)=>state.WishListReducers.WishListProduct);
    let lengthOfWishlistArray;
    let wishListProductData=[];
    try{
        if(wishListProduct.data){
            wishListProductData=wishListProduct.data;
            lengthOfWishlistArray=wishListProduct.data.length;
        };
    }catch(e){};
    return [wishListProductData,lengthOfWishlistArray,reload,setReload]
}

export default UserFavProductPageHook
