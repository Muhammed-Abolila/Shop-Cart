import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductsCart } from '../../Redux/Actions/CartActions';
const CartPageHook = () => {
    let [reload,setReload]=useState(false);
    let dispatch=useDispatch();
    useEffect(()=>{
      const get=async()=>{
        await dispatch(GetAllProductsCart());
      };
      get();
    },[reload]);
    let productsCart=useSelector((state)=>state.CartReducer.ProductsCart);    
    let productCartDataToCoupone, productsCartData,lengthOfArray;
   try{
    if(productsCart.data){
      productCartDataToCoupone=productsCart.data;
      productsCartData=productsCart.data.products;
      lengthOfArray=productsCart.numOfCartItems;
    }
   }catch(e){};
   return [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]
}

export default CartPageHook
