import React from 'react';
const AddSubCategory = () => {
  return (
      <div className="inputs mt-3">
          <input className="form-control input-style" type="text" placeholder=' اسم التصنيف الفرعي'/>
          <select className="form-control mt-3 input-style" name="" id="">
            <option value="">التصنيف الأول</option>
            <option value="">التصنيف الثاني</option>
            <option value="">التصنيف الثالث</option>
            <option value="">التصنيف الرابع</option>
            <option value="">التصنيف الخامس</option>
          </select>
        <button className='btn'>حفظ التعديلات</button> 
      </div>
  )
}
export default AddSubCategory;
