import React from 'react'
import imgLogo from "../../../assets/image/img-logo.png"

const AddProduct = () => {
  return (
    
    <div className="inputs mt-3">
        <div className="img">
          <label>صور المنتج</label><br/>
          <img src={imgLogo} className="my-2" alt="" />
        </div>
        <input className="form-control input-style" type="text" placeholder=' اسم  المنتج'/>
        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='وصف المنتج'></textarea>
        <input className="form-control mt-3 input-style" type="number" placeholder='السعر قبل الخصم'/>
        <input className="form-control mt-3 input-style" type="number" placeholder=' سعر  المنتج'/>
        <select className="form-control mt-3 input-style" name="" id="">
          <option value="" selected>التصنيف الرئيسى</option>
          <option value="">التصنيف الثاني</option>
          <option value="">التصنيف الثالث</option>
          <option value="">التصنيف الرابع</option>
          <option value="">التصنيف الخامس</option>
        </select>
        <select className="form-control mt-3 input-style" name="" id="">
          <option value="" selected>التصنيف الفرعي</option>
          <option value="">التصنيف الثاني</option>
          <option value="">التصنيف الثالث</option>
          <option value="">التصنيف الرابع</option>
          <option value="">التصنيف الخامس</option>
        </select>
        <select className="form-control mt-3 input-style" name="" id="">
          <option value="" selected>الماركه</option>
          <option value="">التصنيف الثاني</option>
          <option value="">التصنيف الثالث</option>
          <option value="">التصنيف الرابع</option>
          <option value="">التصنيف الخامس</option>
        </select>
        <div className='text-start'>
          <button className='btn'>حفظ التعديلات</button>
        </div>
      
    </div>
  )
}

export default AddProduct
