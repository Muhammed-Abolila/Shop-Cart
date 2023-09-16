import React from 'react';
import { ToastContainer } from 'react-toastify';
import AdminAddSubCategoryHook from '../../../CustomHooks/SubCategoryHooks/AdminAddSubCategoryHook';
const AddSubCategory = () => {
  let [name,catData,onSubNameChange,onMainCategoryChange,handleSubCategoryData]=AdminAddSubCategoryHook();
  return (
      <div className="inputs mt-3">
          <input className="form-control input-style" type="text" placeholder=' اسم التصنيف الفرعي' onChange={onSubNameChange} value={name}/>
          <select className="form-control mt-3 input-style" onChange={onMainCategoryChange}>
            <option value={0}>إختر التصنيف الرئيسي</option>
            {catData?(catData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
          </select>
        <button className='btn' onClick={handleSubCategoryData}>حفظ</button> 
        <ToastContainer />
      </div>
  )
};
export default AddSubCategory;
