import React, { useState } from 'react';
import imgLogo from "../../../assets/image/img-logo.png"
import { useDispatch } from 'react-redux';
import { postBrandDataWithImage } from '../../../Redux/Actions/BrandActions';
const AddBrand = () => {


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
    let formData=new FormData();
    formData.append("name",brandName);
    formData.append("image",selectedImage);
    dispatch(postBrandDataWithImage(formData));
    setBrandImg(imgLogo);
    setBrandName("")
  }
  return (
      <div className="inputs mt-3">
        <div className="img">
          <div>صوره الماركه</div>
          <label htmlFor="brandImg">
          <img src={brandImg} className="my-2" alt="" />
          <input type="file" name="" id="brandImg" onChange={onImageChange}/>
          </label> 
        </div>
        <div className="name text-start">
          <input className="form-control input-style" type="text" placeholder='اسم الماركه' value={brandName} onChange={onNameChange}/>
          <button className='btn' onClick={handleBrandData}>حفظ التعديلات</button>
        </div> 
      </div>
  )
}

export default AddBrand
