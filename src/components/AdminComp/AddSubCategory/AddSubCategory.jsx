import React from 'react';
import { ToastContainer } from 'react-toastify';
import AdminAddSubCategoryHook from '../../../CustomHooks/SubCategoryHooks/AdminAddSubCategoryHook';
const AddSubCategory = () => {
  let [name,CategoryData,onSubNameChange,onMainCategoryChange,handleSubCategoryData]=AdminAddSubCategoryHook()
  return (
      <div className="inputs mt-3">
          <input className="form-control input-style" type="text" placeholder=' اسم التصنيف الفرعي' onChange={onSubNameChange} value={name}/>
          <select className="form-control mt-3 input-style" onChange={onMainCategoryChange}>
            <option value={0}>إختر التصنيف الرئيسي</option>
            {CategoryData.data?(CategoryData.data.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
          </select>
        <button className='btn' onClick={handleSubCategoryData}>حفظ التعديلات</button> 
        <ToastContainer />
      </div>
  )
};
export default AddSubCategory;

// Notes :- لما بضيف تصنيف رئيسي وبعدها ادخل عشان اضيف تصنيف فرعي بيضرب ايرور
// لما اضغط علي زرار الحفظ ينقل اختيار التصنيف الرئيسي الي اختر التصنيف الرئيسي
