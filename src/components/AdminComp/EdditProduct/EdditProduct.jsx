import addLogo from "../../../assets/image/add.png";
import MultiImageInput from 'react-multiple-image-input';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminEdditProductHook from "../../../CustomHooks/ProductsHooks/AdminEdditProduct";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateProduct } from "../../../Redux/Actions/ProductActions";
import { getCategoryApi } from "../../../Redux/Actions/CategoryAction";
import { getBrandsApi } from "../../../Redux/Actions/BrandActions";
import { getSubCategoryDataWithMaincategoryId } from "../../../Redux/Actions/SubCategoryActions";
const EdditProduct = () => {
//   let {id}=useParams();

//   let dispatch=useDispatch();
//   useEffect(() => {
//     dispatch(getCategoryApi());
//     dispatch(getBrandsApi());
//     }, []);
//   // Access To Category Data for Loop
//   let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi.data);
//   // // Access To Brand Data for Loop
//   let AllBrandsData=useSelector((state)=>state.BrandReducer.BrandApi.data);
  
//   useEffect(() => {
//     dispatch(updateProduct(id))
//   }, []);

//   let UpdateProductData=useSelector((state)=>state.ProductReducer.UpdateProductApi.data);

//   let [productName,setProductName]=useState('');
//   let [productDesc,setProductDesc]=useState('');
//   let [priceBeforeDescount,setPriceBeforeDescount]=useState(0);
//   let [qty,setQty]=useState(0);
//   let [CatId,setCatId]=useState('');
  
//   const [selectedSubCategory,setSelectedSubCategory]=useState([])

//   let [BrandId,setBrandId]=useState('');
//   let [selectedColors,setSelectedColors]=useState([]);
//   let [showPicker,setShowPicker]=useState(false)

  
  
//   useEffect(()=>{
//     if(UpdateProductData){
//       setProductName(UpdateProductData.title);
//       setProductDesc(UpdateProductData.description);
//       setPriceBeforeDescount(UpdateProductData.price);
//       setQty(UpdateProductData.quantity);
//       setCatId(UpdateProductData.category);
//       setBrandId(UpdateProductData.brand);
//       setSelectedColors(UpdateProductData.availableColors);
//     };
//   },[UpdateProductData]);
// // on product name changing
//   const onProductNameChange=(e)=>{
//     setProductName(e.target.value)
//   }
//   // on product description changing
//   const onProductDescChange=(e)=>{
//     setProductDesc(e.target.value)
//   };
//   // on product price changing
//   const onPriceBeforeDescountChange=(e)=>{
//     setPriceBeforeDescount(e.target.value)
//   };
//   // on product Quantaty changing
//   const onQtyChange=(e)=>{
//     setQty(e.target.value)
//   }
//   // on product main category changing
//   let [options,setOptions]=useState([]);
 
//   const onSelectMainCategory=(e)=>{
//      setCatId(e.target.value);
//      if(e.target.value!==0||e.target.value!==""){
//       dispatch(getSubCategoryDataWithMaincategoryId(e.target.value))
//      }
//   }
//   let subCategoryData=useSelector((state)=>state.subCategoryReducer.subCategoryApi.data);
//   useEffect(()=>{
//     if(subCategoryData!=''&&subCategoryData!=0){
//       setOptions(subCategoryData);
//       setSelectedSubCategory(subCategoryData)
//     }
//   },[subCategoryData]);
//   // const onSelect=(selectedList)=>{
//   //   setSelectedSubCategory(subCategoryData.name)
//   // }

//   // on product Brand changing
//   const onSelectBrands=(e)=>{
//     setBrandId(e.target.value)
//   }
//   // on colors changing
//   const handleChangeComplete = (color) => {
//       setSelectedColors([...selectedColors,color.hex]);
//       setShowPicker(false)
//   };
//   const removeColor=(color)=>{
//   let newColors=selectedColors.filter((item)=>item!==color)
//   setSelectedColors(newColors);
//   }

//   // on handle data
//   const handleProductData=()=>{

//   }


//   // console.log(UpdateProductData);
//   // console.log(productName);
//   // console.log(productDesc);
//   // console.log(priceBeforeDescount);
//   // console.log(qty);
//   console.log("category id",CatId);
//   // console.log("brand id",BrandId);
//   // console.log("colors",selectedColors);
    
  return (
    <></>
    // <div className="inputs mt-3">
    //     <div className="img">
    //       <div className="mb-2">صور المنتج</div>
    //       <MultiImageInput
    //         images={images}
    //         setImages={setImages}
    //         max={5}
    //         allowCrop={false}
    //         theme={{
    //           background: '#fff',
    //           outlineColor: '#dee2e6',
    //           textColor: '#212529',
    //         }}
    //       />
    //     </div>
    //     <input className="form-control input-style" type="text" placeholder=' اسم  المنتج' value={productName} onChange={onProductNameChange}/>
    //     <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='وصف المنتج' value={productDesc} onChange={onProductDescChange}></textarea>
    //     <input className="form-control mt-3 input-style" type="number" placeholder='السعر قبل الخصم' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
    //     <input className="form-control mt-3 input-style" type="number" placeholder=' سعر  المنتج'  value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
    //     <input className="form-control mt-3 input-style" type="number" placeholder='الكميه'  value={qty} onChange={onQtyChange}/>
    //     <select className="form-control mt-3 input-style" value={CatId} onChange={onSelectMainCategory}>
    //       <option value={0}>التصنيف الرئيسى</option>
    //       {CategoryData?(CategoryData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
    //     </select>
    //     <Multiselect
    //       options={options}
    //       onSelect={onSelect}
    //       onRemove={onRemove}
    //       displayValue="name"
    //       placeholder="التصنيف الفرعي"
    //       className="form-control mt-3 input-style text-end p-0"
    //       />
    //     <select className="form-control mt-3 input-style" value={BrandId} onChange={onSelectBrands}>
    //       <option value={0}>الماركه</option>
    //       {AllBrandsData?(AllBrandsData.map((item)=><option key={item._id} value={item._id}>{item.name}</option>)):null}
    //     </select>


    //     <div className="colors-container">
    //       <div className="my-2">الألوان المتاحه للمنتج</div>
    //       <div className="colors-inputs">
    //         {selectedColors?(selectedColors.map((color,index)=><div key={index} className="color" style={{backgroundColor:`${color}`}} onClick={()=>removeColor(color)}></div>)):null}
    //         {selectedColors.length<=4?
    //         (
    //           <div className="color" onClick={()=>setShowPicker(!showPicker)} style={{backgroundImage:`url(${addLogo})`,cursor:"pointer"}}></div>
    //         )
    //         :null}
    //         {showPicker===true?(
    //             <CompactPicker 
    //             className="color-Picker"
    //             onChangeComplete={handleChangeComplete }
    //             />
    //           ):null} 
    //       </div>
    //     </div>
    //     <div className='text-start'>
    //       <button className='btn' onClick={handleProductData}>حفظ التعديلات</button>
    //     </div>
    //     <ToastContainer />
    // </div>
  )
};
export default EdditProduct;