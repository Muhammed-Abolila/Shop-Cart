import { ToastContainer } from 'react-toastify';
import AdminAddCategoryHook from '../../../CustomHooks/CtegoryHooks/AdminAddCategoryHook';
const AddCategory = () => {
let [CategoryImg,onImageChange,onNameChange,CategoryName,handleCategoryData]=AdminAddCategoryHook()
  return (
      <div className="inputs mt-3">
        <h4>Category Image</h4>
        <div className="img">
            <label htmlFor="category-img">
              <img 
                src={CategoryImg} 
                className="my-2" 
                alt=""/>
            </label>
            <input
                type="file" 
                id="category-img" 
                onChange={onImageChange}
                />
        </div>
        <div className="name text-end">
          <input 
            className="form-control input-style mb-2"
            type="text"
            placeholder='category name'
            onChange={onNameChange} 
            value={CategoryName}
            />
          <button className='btn btn-style' onClick={handleCategoryData}>Save</button>
        </div> 
        <ToastContainer />
      </div>
  )
}; 
export default AddCategory
