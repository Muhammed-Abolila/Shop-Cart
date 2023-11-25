import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../Redux/Actions/CartActions';
import Notifications from '../Notifications';
const ItemDetailsHook = (oneProduct,reload,setReload) => {
    let dispatch=useDispatch();
    let user=JSON.parse(localStorage.getItem("user"));
    let [selectedColor,setSelectedColor]=useState("");
    let [indexOfselectedColor,setIndexOfSelectedColor]=useState("");
    const onColorChange=(color,index)=>{
        setIndexOfSelectedColor(index)
        setSelectedColor(color)
    };
    let response=useSelector((state)=>state.CartReducer.AddToCart);
    let [notify]=Notifications(response)
    // Add Product To Cart
    const onAddToCart=async()=>{
        if(user){
            if(user.role==="user"){
                if(oneProduct.availableColors.length>=1 && selectedColor==''){
                    notify("Choose Color"); 
                }else{
                    await dispatch(AddToCart({
                        productId: oneProduct._id,
                        color: selectedColor
                    }));
                    setReload(!reload)
                } 
            }else if(user.role==="admin"){
                notify("Login As User"); 
            }
        }else{
            notify("Login"); 
        }
    }
    return [indexOfselectedColor,onColorChange,onAddToCart]
}
export default ItemDetailsHook
