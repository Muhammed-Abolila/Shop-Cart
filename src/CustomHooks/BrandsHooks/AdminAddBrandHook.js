import  { useState } from 'react';
import imgLogo from "../../assets/image/img-logo.png"
import { useDispatch, useSelector, } from 'react-redux';
import {postBrandDataWithImage} from "../../Redux/Actions/BrandActions";
import Notifications from "../Notifications"
const AdminAddBrandHook = () => {
  let notifyStatus=useSelector((state)=>state.BrandReducer.PostBrandApi);
  let [notify]=Notifications(notifyStatus)
  let [brandImg,setBrandImg]=useState(imgLogo);
  let [brandName,setBrandName]=useState("");
  let [selectedImage,setSelectedImage]=useState(null);
  let dispatch=useDispatch()
  // When Admin Change Image
    const onImageChange=(e)=>{
      if(e.target.files&&e.target.files[0]){
        setBrandImg(URL.createObjectURL(e.target.files[0]));
        setSelectedImage(e.target.files[0])
      }
    }

    // When Admin Change Name
  const onNameChange=(e)=>{
    setBrandName(e.target.value);
  }
  const handleBrandData=()=>{
    if (!navigator.onLine){
      notify("Connect To The Internet");
    }else{
      if(selectedImage==null){
        notify("Insert Brand Image");
      }else if(brandName==""){
        notify("Insert Brand Name");
      }else{
        let formData=new FormData();
        formData.append("name",brandName);
        formData.append("image",selectedImage);
        dispatch(postBrandDataWithImage(formData));
        setBrandImg(imgLogo);
        setBrandName("")
      }
    }
  }
  return [brandImg,brandName,onImageChange,onNameChange,handleBrandData]
}

export default AdminAddBrandHook
