import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../Redux/Actions/CartActions';
import Notifications from '../Notifications';
const ItemDetailsHook = (oneProduct,reload,setReload) => {
    let dispatch=useDispatch();
    let user=JSON.parse(localStorage.getItem("user"));
    let [display,setDisplay]=useState("none");
    let [loading,setLoading]=useState(false)
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
                    setLoading(true);
                    setDisplay('flex');
                    await dispatch(AddToCart({
                        productId: oneProduct._id,
                        color: selectedColor
                    }));
                    setReload(!reload);
                    setLoading(false)
                } 
            }else if(user.role==="admin"){
                notify("Login As User"); 
            }
        }else{
            notify("Login"); 
        }
    };
    useEffect(()=>{
        if(loading===false){
            setDisplay('none');
        }
    },[loading])
    return [indexOfselectedColor,onColorChange,onAddToCart,display]
}
export default ItemDetailsHook
