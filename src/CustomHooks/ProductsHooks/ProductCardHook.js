import { useDispatch } from 'react-redux';
import { AddProductToWishlist, RemoveProductFromWishlist } from '../../Redux/Actions/WishListActions';
import { useState, useEffect} from 'react';
 const ProductCardHook = (CardProductData,favProduct) => {
    let dispatch=useDispatch();
    let user=JSON.parse(localStorage.getItem("user"));
    let fav=favProduct.includes(CardProductData._id)
    let [favItem,setFavItem]= useState(fav);
    let favStyle=favItem?'red':'gray';
    const handleWishlist=async()=>{
      if(localStorage.getItem("token")!=null){
        if(user.role=="user"){
          if(favItem){
            await dispatch(RemoveProductFromWishlist(CardProductData._id));
            setFavItem(false)
          }else{
            await dispatch(AddProductToWishlist({
              "productId": CardProductData._id
            }));
            setFavItem(true) 
          }
        }else{
          window.alert("لا يمكن للادمن")
        }
      }else{
        window.alert("قم بتسجيل الدخول")
      } 
    };
    useEffect(()=>{
      setFavItem(fav)
    },[fav]);
    return [favStyle,handleWishlist]
 }
 
 export default ProductCardHook
 