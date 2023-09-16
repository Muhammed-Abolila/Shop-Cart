import addLogo from "../../../assets/image/add.png";
import MultiImageInput from 'react-multiple-image-input';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminEdditProductHook from "../../../CustomHooks/ProductsHooks/AdminEdditProduct";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetProductDataWithId, updateProduct } from "../../../Redux/Actions/ProductActions";
import { getCategoryApi } from "../../../Redux/Actions/CategoryAction";
import { getBrandsApi } from "../../../Redux/Actions/BrandActions";
import { getSubCategoryDataWithMaincategoryId } from "../../../Redux/Actions/SubCategoryActions";
import Notifications from "../../../CustomHooks/Notifications";
const EdditProduct = () => {
let {id}=useParams();
let dispatch=useDispatch();

useEffect(()=>{
  const run=async()=>{
    await dispatch(GetProductDataWithId(id));
    await dispatch(getCategoryApi());
    await dispatch(getBrandsApi())
  }
  run()
},[]);
let singleProduct=useSelector((state)=>state.ProductReducer.SingleProductApi);
let allcategories=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
let allbrands=useSelector((state)=>state.BrandReducer.GetAllBrandApi);

let singleProductData,allCategoriesData,allBrandsData;
try{ 
  if(singleProduct){
    singleProductData=singleProduct.data
  }else{
    singleProductData=[]
  };
  if(allcategories){
    allCategoriesData=allcategories.data;
  }else{
    allCategoriesData=[]
  };
  if(allbrands){
    allBrandsData=allbrands.data;
  }else{
    allBrandsData=[]
  }

}catch(err){
  console.log(err)
}

console.log("singleProductData",singleProductData);


let [images,setImages]=useState([]);
let [productName,setProductName]=useState('');
let [productDesc,setProductDesc]=useState('');
let [priceBeforeDescount,setPriceBeforeDescount]=useState('');
let [priceAfterDescount,setPriceAfterDescount]=useState('');
let [qty,setQty]=useState('');
let [catId,setCatId]=useState('');
let [options,setOptions]=useState([]);
let [selectedSubCategory,setSelectedSubCategory]=useState([])
let [brandId,setBrandId]=useState('');
let [selectedColors,setSelectedColors]=useState([]);
useEffect(()=>{
  if(singleProductData){
  setImages([singleProductData.images])
  setProductName(singleProductData.title);
  setProductDesc(singleProductData.description);
  setPriceBeforeDescount(singleProductData.price);
  setQty(singleProductData.quantity);
  setCatId(singleProductData.category);
  setBrandId(singleProductData.brand);
  setSelectedColors(singleProductData.availableColors)
}
},[singleProductData])

const onNameChange=(e)=>{
  setProductName(e.target.value);
};
const onDescChange=(e)=>{
  setProductDesc(e.target.value)
}
const onPriceBeforeDescountChange=(e)=>{
  setPriceBeforeDescount(e.target.value)
}
const onPriceAfterDescountChange=(e)=>{
  setPriceAfterDescount(e.target.value)
}
const onQtyChange=(e)=>{
  setQty(e.target.value)
};
const onSelectMainCategory=(e)=>{
  setCatId(e.target.value)
}

let subCategoryDataDependCategoryId=useSelector((state)=>state.subCategoryReducer.GetSubCategoryWithId);
let allSubCategoryData;
if (subCategoryDataDependCategoryId){
  allSubCategoryData=subCategoryDataDependCategoryId.data;
}else{
  allSubCategoryData=[]
}
useEffect(()=>{
  if(catId!=""||catId!=0){
    dispatch(getSubCategoryDataWithMaincategoryId(catId))
  }
},[catId]);
useEffect(()=>{
  if(allSubCategoryData){
    setOptions(allSubCategoryData);
  }
},[allSubCategoryData]);
const onSelect=(selectedList)=>{
  setSelectedSubCategory(selectedList)
}
const onRemove=(selectedList)=>{
  setSelectedSubCategory(selectedList);
}


const onBrandChange=(e)=>{
  setBrandId(e.target.value)
}

let [showPicker,setShowPicker]=useState(false)
const handleChangeComplete = (color) => {
    setSelectedColors([...selectedColors,color.hex]);
    setShowPicker(false)
};
const removeColor=(color)=>{
let newColors=selectedColors.filter((item)=>item!==color)
    setSelectedColors(newColors);
}
// convert Base64 image to file
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
} 

// convert url to file
async function createFile(imgUrl){
  let response = await fetch(`${imgUrl}`);
  let data = await response.blob();
  let metadata = {
    type: 'image/jpeg'
  };
  let file = new File([data], "test.jpg", metadata);
  // ... do something with the file or return it
}
// Notification
let notifyStatus=useSelector((state)=>state.ProductReducer.UpdateProductApi);
console.log("notifyStatus",notifyStatus);

// let [notify]=Notifications(notifyStatus)
console.log("reload");

  const handleData=()=>{
    console.log(images);
    
    let imgsAfterConvert;
    if(images.length<=1000){
      imgsAfterConvert=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>
      createFile(images[index]));
    }else{
      imgsAfterConvert=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>
        dataURLtoFile(images[index],Math.random()+".png"));
    }
        let formData=new FormData();
        formData.append("title",productName)
        formData.append("description",productDesc)
        formData.append("quantity",qty)
        formData.append("price",priceBeforeDescount)
        formData.append("imageCover",imgsAfterConvert[0])
        formData.append("category",catId)
        formData.append("brand",brandId);
        // the way to send array with form data
        imgsAfterConvert.map((img)=>formData.append("images",img))
        selectedColors.map((Colors)=>formData.append("availableColors",Colors))
        selectedSubCategory.map((SubCategory)=>formData.append("subcategory",SubCategory._id));
        dispatch(updateProduct(id,formData));
        setImages({});
        setProductName("");
        setProductDesc("");
        setPriceBeforeDescount("السعر قبل الخصم");
        setPriceAfterDescount("سعر المنتج");
        setQty("");
        setCatId("");
        setSelectedSubCategory("");
        setBrandId("");
        setSelectedColors([]);

  }

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


        <input className="form-control input-style" type="text" placeholder=' اسم  المنتج' value={productName} onChange={onNameChange}/>

        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='وصف المنتج' value={productDesc} onChange={onDescChange}></textarea>
        
        <input className="form-control mt-3 input-style" type="number" placeholder='السعر قبل الخصم' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
        
        <input className="form-control mt-3 input-style" type="number" placeholder=' سعر  المنتج'  value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
        
        <input className="form-control mt-3 input-style" type="number" placeholder='الكميه'  value={qty} onChange={onQtyChange}/>
        
        <select className="form-control mt-3 input-style" value={catId} onChange={onSelectMainCategory}>
          <option value={0}>التصنيف الرئيسى</option>
          {allCategoriesData?(allCategoriesData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>
        <Multiselect
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          placeholder="التصنيف الفرعي"
          className="form-control mt-3 input-style text-end p-0"
          />
        <select className="form-control mt-3 input-style" value={brandId} onChange={onBrandChange}>
          <option value={0}>الماركه</option>
          {allBrandsData?(allBrandsData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
        </select>


        <div className="colors-container">
          <div className="my-2">الألوان المتاحه للمنتج</div>
          <div className="colors-inputs">
            {selectedColors?(selectedColors.map((color,index)=><div key={index} className="color" style={{backgroundColor:`${color}`}} onClick={()=>removeColor(color)}></div>)):null}
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


        <div className='text-start'>
          <button className='btn' onClick={handleData}>حفظ التعديلات</button>
        </div>
        <ToastContainer />
    </div>
  )
};
export default EdditProduct;