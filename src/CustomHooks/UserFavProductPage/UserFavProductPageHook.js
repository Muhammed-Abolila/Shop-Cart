import { useDispatch, useSelector } from 'react-redux';
import { GetAllFavProduct } from '../../Redux/Actions/WishListActions';
import { useEffect } from 'react'
const UserFavProductPageHook = () => {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetAllFavProduct())
    },[]);
    let wishListProduct=useSelector((state)=>state.WishListReducers.WishListProduct);
    
    let wishListProductData=[];
    try{
        if(wishListProduct){
            wishListProductData=wishListProduct.data
        };
    }catch(e){}
    return [wishListProductData]
}

export default UserFavProductPageHook
