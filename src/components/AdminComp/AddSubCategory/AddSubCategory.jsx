import React from 'react';
import { ToastContainer } from 'react-toastify';
import AdminAddSubCategoryHook from '../../../CustomHooks/SubCategoryHooks/AdminAddSubCategoryHook';
const AddSubCategory = () => {
  let [name,catData,onSubNameChange,onMainCategoryChange,handleSubCategoryData]=AdminAddSubCategoryHook();
  return (
      <div className="inputs mt-3 text-end">
          <input className="form-control input-style" type="text" placeholder='sub-category name' onChange={onSubNameChange} value={name}/>
          <select className="form-control my-3 input-style" onChange={onMainCategoryChange}>
            <option value={0}>Choose Category</option>
            {catData?(catData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
          </select>
        <button className='btn btn-style' onClick={handleSubCategoryData}>Save</button> 
        <ToastContainer />
      </div>
  )
};
export default AddSubCategory;
