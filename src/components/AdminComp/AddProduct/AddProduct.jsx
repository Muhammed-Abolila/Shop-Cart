import addLogo from "../../../assets/image/add.png"
import MultiImageInput from 'react-multiple-image-input';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminAddProductHook from "../../../CustomHooks/ProductsHooks/AdminAddProductHook";
const AddProduct = () => {
const [AllCategoryData,AllBrandsData,images,productName,onProductNameChange,productDesc,onProductDescChange,
       priceBeforeDescount,onPriceBeforeDescountChange,priceAfterDescount,onPriceAfterDescountChange,qty,
       onQtyChange,onSelectMainCategory,options,onSelect,onRemove,onSelectBrands,showPicker,handleChangeComplete,
       removeColor,handleProductData,setImages,selectedColors,setShowPicker]=AdminAddProductHook()
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
        <input className="form-control input-style" type="text" placeholder='Product Name' value={productName} onChange={onProductNameChange}/>
        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='Description' value={productDesc} onChange={onProductDescChange}></textarea>
        <input className="form-control mt-3 input-style" type="number" placeholder='Price Before Discount' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder='Price After Discount'  value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder='Quantity'  value={qty} onChange={onQtyChange}/>
        <select className="form-control mt-3 input-style" onChange={onSelectMainCategory}>
          <option value={0}>Choose Main Category</option>
          {AllCategoryData?(AllCategoryData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          placeholder="Choose Sub-Category"
          className="form-control mt-3 input-style p-0"
          />
        <select className="form-control mt-3 input-style" onChange={onSelectBrands}>
          <option value={0}>Choose Brand</option>
          {AllBrandsData?(AllBrandsData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <div className="colors-container">
          <div className="my-2">Choose Colors</div>
          <div className="colors-inputs">
            {selectedColors?(selectedColors.map((color,index)=><div key={index} className="color" style={{backgroundColor:`${color}`,border:"2px solid #ffda05"}} onClick={()=>removeColor(color)}></div>)):null}
            {selectedColors.length<=4?
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
          <button className='btn btn-style' onClick={handleProductData}>Save</button>
        </div>
        <ToastContainer />
    </div>
  )
};
export default AddProduct;
