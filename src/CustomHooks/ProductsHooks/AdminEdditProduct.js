import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetProductDataWithId, updateProduct } from "../../Redux/Actions/ProductActions";
import { getCategoryApi } from "../../Redux/Actions/CategoryAction";
import { getBrandsApi } from "../../Redux/Actions/BrandActions";
import { getSubCategoryDataWithMaincategoryId } from "../../Redux/Actions/SubCategoryActions";
import Notifications from "../../CustomHooks/Notifications";
import { useNavigate } from "react-router";
const AdminEdditProductHook = (id) => {
  let Navigate=useNavigate("");
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
        setPriceAfterDescount(singleProduct.data.priceAfterDiscount);
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
  try{
    if (subCategoryDataDependCategoryId){
      allSubCategoryData=subCategoryDataDependCategoryId.data;
    }else{
      allSubCategoryData=[]
    }
  }catch(e){}
  
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
        notify("Insert Product Images")
      }else if(productName==""){
        notify("Insert Product Name")
      }else if(productDesc==""){
        notify("Insert Product Description")
      }else if(priceAfterDescount=="Price After Discount"){
        notify("Insert Product Price")
      }else if(qty=="Quantity"){
        notify("Insert Product Quantity")
      }else if(catId==""){
        notify("Choose Main category")
      }else if(selectedSubCategory==""){
        notify("Choose Sub-Category")
      }else if(brandId==""){
        notify("Choose Brand")
      }else{
          let formData=new FormData();
          formData.append("title",productName)
          formData.append("description",productDesc)
          formData.append("quantity",qty)
          formData.append("price",priceBeforeDescount);
          formData.append("priceAfterDiscount",priceAfterDescount);
          formData.append("category",catId)
          formData.append("brand",brandId);
          if(result===true){
            imgsAfterConvert=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>
            dataURLtoFile(images[index],Math.random()+".png"));
            formData.append("imageCover",imgsAfterConvert[0]);
            imgsAfterConvert.map((img)=>formData.append("images",img))
          }
          // the way to send array with form data
          selectedColors.map((Colors)=>formData.append("availableColors",Colors))
          selectedSubCategory.map((SubCategory)=>formData.append("subcategory",SubCategory._id));
          dispatch(updateProduct(id,formData));
          setImages({});
          setProductName("");
          setProductDesc("");
          setPriceBeforeDescount("Price Before Discount");
          setPriceAfterDescount("Price After Discount");
          setQty("");
          setCatId("");
          setSelectedSubCategory("");
          setBrandId("");
          setSelectedColors([]);
          Navigate("/admin/manageproduct")
    }
  }
  return [images,setImages,productName,onNameChange,productDesc,onDescChange,priceBeforeDescount,onPriceBeforeDescountChange,priceAfterDescount,
    onPriceAfterDescountChange,qty,onQtyChange,catId,onSelectMainCategory,allCategoriesData,options,onSelect,onRemove,
    brandId,onBrandChange,allBrandsData,selectedColors,handleChangeComplete,handleData,removeColor,setShowPicker,showPicker]
}

export default AdminEdditProductHook
