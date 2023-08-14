import React from 'react';
import imgLogo from "../../../assets/image/img-logo.png"
const AddBrand = () => {
  return (
      <div className="inputs mt-3">
        <div className="img">
          <label>صوره الماركه</label><br/>
          <img src={imgLogo} className="my-2" alt="" />
        </div>
        <div className="name text-start">
          <input className="form-control input-style" type="text" placeholder='اسم الماركه'/>
          <button className='btn'>حفظ التعديلات</button>
        </div> 
      </div>
  )
}

export default AddBrand
