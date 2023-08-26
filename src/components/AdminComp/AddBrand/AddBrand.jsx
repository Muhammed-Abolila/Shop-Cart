import { ToastContainer } from 'react-toastify';
import AdminAddBrandHook from '../../../CustomHooks/BrandsHooks/AdminAddBrandHook';
const AddBrand = () => {
  let [brandImg,brandName,onImageChange,onNameChange,handleBrandData]=AdminAddBrandHook()
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
        <ToastContainer /> 
      </div>
  )
}

export default AddBrand
