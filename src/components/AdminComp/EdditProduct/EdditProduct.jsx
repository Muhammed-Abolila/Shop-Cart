import addLogo from "../../../assets/image/add.png";
import MultiImageInput from 'react-multiple-image-input';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import { useParams } from "react-router";
import AdminEdditProductHook from "../../../CustomHooks/ProductsHooks/AdminEdditProduct";

const EdditProduct = () => {
let {id}=useParams();
let [images,setImages,productName,onNameChange,productDesc,onDescChange,priceBeforeDescount,onPriceBeforeDescountChange,priceAfterDescount,
  onPriceAfterDescountChange,qty,onQtyChange,catId,onSelectMainCategory,allCategoriesData,options,onSelect,onRemove,
  brandId,onBrandChange,allBrandsData,selectedColors,handleChangeComplete,handleData,removeColor,setShowPicker,showPicker]=AdminEdditProductHook(id)
  return (
    <div className="inputs my-3">
        <div className="img">
        <div className="mb-2">Product Images</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            max={5}
            allowCrop={false}
            theme={{
              background: '#fff',
              outlineColor: '#dee2e6',
              textColor: '#212529',
            }}
          />
        </div>
        <input className="form-control input-style" type="text" placeholder='Product Name' value={productName} onChange={onNameChange}/>
        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='Description' value={productDesc} onChange={onDescChange}></textarea>
        <input className="form-control mt-3 input-style" type="number" placeholder='Price Before Discount' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
        
        <input className="form-control mt-3 input-style" type="number" placeholder='Price After Discount'   value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
        
        <input className="form-control mt-3 input-style" type="number" placeholder='Quantity'  value={qty} onChange={onQtyChange}/>
        
        <select className="form-control mt-3 input-style" value={catId} onChange={onSelectMainCategory}>
          <option value={0}>Choose Main Category</option>
          {allCategoriesData.data?(allCategoriesData.data.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          placeholder="Choose Sub-Category"
          className="form-control mt-3 input-style p-0"
          />
        <select className="form-control mt-3 input-style" value={brandId} onChange={onBrandChange}>
          <option value={0}>Choose Brand</option>
          {allBrandsData.data?(allBrandsData.data.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <div className="colors-container">
          <div className="my-2">Choose Colors</div>
          <div className="colors-inputs">
            {selectedColors?(selectedColors.map((color,index)=><div key={index} className="color" style={{backgroundColor:`${color}`,border:"2px solid #ffda05"}} onClick={()=>removeColor(color)}></div>)):null}
            {selectedColors?
            (
              <div className="color" onClick={()=>setShowPicker(!showPicker)} style={{backgroundImage:`url(${addLogo})`,cursor:"pointer"}}></div>
            )
            :null}
            {showPicker===true?(
                <CompactPicker 
                className="color-Picker"
                onChangeComplete={handleChangeComplete }
                />
              ):null} 
          </div>
        </div>
        <div className='text-end'>
          <button className='btn btn-style' onClick={handleData}>Save</button>
        </div>
        <ToastContainer />
    </div>
  )
};
export default EdditProduct;