import { ToastContainer } from 'react-toastify';
import AdminAddBrandHook from '../../../CustomHooks/BrandsHooks/AdminAddBrandHook';
const AddBrand = () => {
  let [brandImg,brandName,onImageChange,onNameChange,handleBrandData]=AdminAddBrandHook()
  return (
      <div className="inputs mt-3">
        <h4>Brand Image</h4>
        <div className="img">
          <label htmlFor="brandImg">
            <img src={brandImg} className="my-2" alt="" />
            <input type="file" name="" id="brandImg" onChange={onImageChange}/>
          </label> 
        </div>
        <div className="name text-end">
          <input className="form-control input-style mb-2" type="text" placeholder='brand name' value={brandName} onChange={onNameChange}/>
          <button className='btn btn-style' onClick={handleBrandData}>Save</button>
        </div>
        <ToastContainer /> 
      </div>
  )
}
export default AddBrand
