import { ToastContainer } from 'react-toastify';
import AdminAddCategoryHook from '../../../CustomHooks/CtegoryHooks/AdminAddCategoryHook';
const AddCategory = () => {
let [CategoryImg,onImageChange,onNameChange,CategoryName,handleCategoryData]=AdminAddCategoryHook()
  return (
      <div className="inputs mt-3">
        <div className="img">
          <div>صوره التصنيف</div>
          <div>
            <label htmlFor="upload-img">
              <img 
                src={CategoryImg} 
                className="my-2" 
                alt=""/>
            </label>
            <input
                type="file" 
                id="upload-img" 
                onChange={onImageChange}
                />
          </div>
        </div>
        <div className="name text-start">
          <input 
            className="form-control input-style"
            type="text"
            placeholder='اسم التصنيف'
            onChange={onNameChange} 
            value={CategoryName}
            />
          <button className='btn' onClick={handleCategoryData}> حفظ التعديلات</button>
        </div> 
        <ToastContainer />
      </div>
  )
};
export default AddCategory
