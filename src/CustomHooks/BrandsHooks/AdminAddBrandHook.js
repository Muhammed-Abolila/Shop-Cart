import  { useState } from 'react';
import imgLogo from "../../assets/image/img-logo.png"
import { useDispatch, useSelector, } from 'react-redux';
import {postBrandDataWithImage} from "../../Redux/Actions/BrandActions";
import Notifications from "../Notifications"
const AdminAddBrandHook = () => {
  let notifyStatus=useSelector((state)=>state.BrandReducer.BrandApi);
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
      notify("الرجاء الإتصال بالإنترنت");
    }else{
      if(selectedImage==null){
        notify("من فضلك ادخل صوره الماركه");
      }else if(brandName==""){
        notify("من فضلك أدخل اسم الماركه");
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
