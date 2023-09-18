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
import { array } from "prop-types";
const EdditProduct = () => {
let {id}=useParams();
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
let allCategoriesData=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
let allBrandsData=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
useEffect(()=>{
  try{
    if(singleProduct){
      setImages([singleProduct.data.images])
      setProductName(singleProduct.data.title);
      setProductDesc(singleProduct.data.description);
      setPriceBeforeDescount(singleProduct.data.price);
      setQty(singleProduct.data.quantity);
      setCatId(singleProduct.data.category);
      setBrandId(singleProduct.data.brand);
      setSelectedColors(singleProduct.data.availableColors)
    }
  }catch(e){}
},[singleProduct])
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

// Notification
let notifyStatus=useSelector((state)=>state.ProductReducer.UpdateProductApi);
let [notify]=Notifications(notifyStatus)

  const handleData=()=>{
    let imgsAfterConvert;
    let text = images[0];
    let result = text.includes("base64");
    if(images==""){
      notify("من فضلك أدخل صوره المنتج")
    }else if(productName==""){
      notify("من فضلك أدخل إسم المنتج")
    }else if(productDesc==""){
      notify("من قضلك أدخل وصف للمنتج")
    }else if(priceAfterDescount=="سعر المنتج"){
      notify("من فضلك أدخل السعر النهائي للمنتج")
    }else if(qty=="الكميه"){
      notify("من فضلك أدخل كميه المنتج")
    }else if(catId==""){
      notify("من فضلك أدخل التصنيف الرئيسي للمنتج")
    }else if(selectedSubCategory==""){
      notify("من فضلك أدخل التصنيف الفرعي للمنتج")
    }else if(brandId==""){
      notify("من فضلك أدخل ماركه المنتج")
    }else{
        let formData=new FormData();
        formData.append("title",productName)
        formData.append("description",productDesc)
        formData.append("quantity",qty)
        formData.append("price",priceBeforeDescount)
        formData.append("category",catId)
        formData.append("brand",brandId);
        if(result===true){
          imgsAfterConvert=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>
          dataURLtoFile(images[index],Math.random()+".png"));
          formData.append("imageCover",imgsAfterConvert[0]);
          imgsAfterConvert.map((img)=>formData.append("images",img))
        }else{}
        // the way to send array with form data
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
          {allCategoriesData.data?(allCategoriesData.data.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
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
          {allBrandsData.data?(allBrandsData.data.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
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