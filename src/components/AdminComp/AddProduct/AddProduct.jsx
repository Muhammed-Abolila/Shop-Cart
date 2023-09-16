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
    <div className="inputs mt-3">
        <div className="img">
          <div className="mb-2">صور المنتج</div>
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
        <input className="form-control input-style" type="text" placeholder=' اسم  المنتج' value={productName} onChange={onProductNameChange}/>
        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='وصف المنتج' value={productDesc} onChange={onProductDescChange}></textarea>
        <input className="form-control mt-3 input-style" type="number" placeholder='السعر قبل الخصم' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder=' سعر  المنتج'  value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder='الكميه'  value={qty} onChange={onQtyChange}/>
        <select className="form-control mt-3 input-style" onChange={onSelectMainCategory}>
          <option value={0}>التصنيف الرئيسى</option>
          {AllCategoryData?(AllCategoryData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          placeholder="التصنيف الفرعي"
          className="form-control mt-3 input-style text-end p-0"
          />
        <select className="form-control mt-3 input-style" onChange={onSelectBrands}>
          <option value={0}>الماركه</option>
          {AllBrandsData?(AllBrandsData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <div className="colors-container">
          <div className="my-2">الألوان المتاحه للمنتج</div>
          <div className="colors-inputs">
            {selectedColors?(selectedColors.map((color,index)=><div key={index} className="color" style={{backgroundColor:`${color}`}} onClick={()=>removeColor(color)}></div>)):null}
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
        <div className='text-start'>
          <button className='btn' onClick={handleProductData}>حفظ</button>
        </div>
        <ToastContainer />
    </div>
  )
};
export default AddProduct;
