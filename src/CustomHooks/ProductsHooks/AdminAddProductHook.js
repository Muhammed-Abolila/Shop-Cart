import { PostProductApi } from '../../Redux/Actions/ProductActions';
import Notifications from '../../CustomHooks/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandsApi } from '../../Redux/Actions/BrandActions';
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { getSubCategoryDataWithMaincategoryId } from '../../Redux/Actions/SubCategoryActions';
import { useState, useEffect } from 'react';
const AdminAddProductHook = () => {
    let dispatch=useDispatch();
  // Access To Category Data for Loop
  let AllCategory=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
  let AllCategoryData=[]
  try{
    if(AllCategory){
      AllCategoryData=AllCategory.data
    }else{
      AllCategoryData=[]
    }
  }catch(e){}
  // Access To Brand Data for Loop
  let AllBrands=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
  let AllBrandsData=[]
  try{
    if(AllBrands){
      AllBrandsData=AllBrands.data
    }else{
      AllBrandsData=[]
    }
  }catch(e){}
  useEffect(() => {
    dispatch(getCategoryApi());
    dispatch(getBrandsApi());
    }, []);
  // Admin Select Images
  const [images, setImages] = useState({});
  
  // Admin Change Product Name
  const [productName,setProductName]=useState("");
  const onProductNameChange=(e)=>{
    setProductName(e.target.value);
  };

  //  Admin Change Product Description
  const [productDesc ,setProductDesc]=useState("");
  const onProductDescChange=(e)=>{
    setProductDesc(e.target.value);
  };

   //  Admin Change Price Before Descount
   const [priceBeforeDescount,setPriceBeforeDescount]=useState("السعر قبل الخصم");
   const onPriceBeforeDescountChange=(e)=>{
    setPriceBeforeDescount(e.target.value);
   };

    //  Admin Change Price After Descount
    const [priceAfterDescount,setPriceAfterDescount]=useState("سعر المنتج");
    const onPriceAfterDescountChange=(e)=>{
      setPriceAfterDescount(e.target.value);
     };
     
   //  Admin Change Quantaty
   const [qty,setQty]=useState("الكميه");
    const onQtyChange=(e)=>{
      setQty(e.target.value);
     };

    // Admin Select Main Category
    const [mainCategoryId,setMainCategoryId]=useState(""); 
    const onSelectMainCategory=(e)=>{
      if(e.target.value!==0||e.target.value!==""){
       dispatch(getSubCategoryDataWithMaincategoryId(e.target.value))
      }
      setMainCategoryId(e.target.value);
    };
    // Access To SubCategory Data Depend On Category Id For Loop
    let subCategoryDataDependCategoryId=useSelector((state)=>state.subCategoryReducer.GetSubCategoryWithId);
    let AllSubCategoryDataDependCategoryId=[];
    try{
      if(subCategoryDataDependCategoryId){
        AllSubCategoryDataDependCategoryId=subCategoryDataDependCategoryId.data
      }else{
        AllSubCategoryDataDependCategoryId=[]
      }
    }catch(e){}
    // Show Sub Category Depend On Category Id
    const [options,setOptions]=useState([]);
    const [selectedSubCategory,setSelectedSubCategory]=useState([])
      useEffect(()=>{
        if(AllSubCategoryDataDependCategoryId!==""||AllSubCategoryDataDependCategoryId!==0){
          setOptions(AllSubCategoryDataDependCategoryId)
        }
      },[subCategoryDataDependCategoryId]);
      
      const onSelect=(selectedList)=>{
        setSelectedSubCategory(selectedList)
      }
      const onRemove=(selectedList)=>{
        setSelectedSubCategory(selectedList);
      };
      
    // Admin Select Brands
    const [brandId,setBrandId]=useState("");
    const onSelectBrands=(e)=>{
      setBrandId(e.target.value);
    }
    // Admin Select Color
    const [selectedColors,setSelectedColors]=useState([]);
    const [showPicker,setShowPicker]=useState(false)
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
  let product=useSelector((state)=>state.ProductReducer.CreateProductApi);
  
  let productData=[]
  try{
    if(product){
      productData=product
    }
  }catch(e){}
  let [notify]=Notifications(productData)
    // Admin Send Data To Api
    const handleProductData=()=>{
        const imgsAfterConvert=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>
        dataURLtoFile(images[index],Math.random()+".png"));
        if(images=={}||images==""){
          notify("من فضلك أدخل صوره المنتج")
        }else if(productName==""){
          notify("من فضلك أدخل إسم المنتج")
        }else if(productDesc==""){
          notify("من قضلك أدخل وصف للمنتج")
        }else if(priceAfterDescount=="سعر المنتج"){
          notify("من فضلك أدخل السعر النهائي للمنتج")
        }else if(qty=="الكميه"){
          notify("من فضلك أدخل كميه المنتج")
        }else if(mainCategoryId==""){
          notify("من فضلك أدخل التصنيف الرئيسي للمنتج")
        }else if(selectedSubCategory==""){
          notify("من فضلك أدخل التصنيف الفرعي للمنتج")
        }else if(brandId==""){
          notify("من فضلك أدخل ماركه المنتج")
        }else{
          let formData=new FormData();
          formData.append("title",productName);
          formData.append("description",productDesc);
          formData.append("quantity",qty);
          formData.append("price",priceBeforeDescount);
          formData.append("priceAfterDiscount",priceAfterDescount);
          formData.append("imageCover",imgsAfterConvert[0]);
          formData.append("category",mainCategoryId);
          formData.append("brand",brandId);
          // the way to send array with form data
          imgsAfterConvert.map((img)=>formData.append("images",img))
          selectedColors.map((Colors)=>formData.append("availableColors",Colors))
          selectedSubCategory.map((SubCategory)=>formData.append("subcategory",SubCategory._id));
          dispatch(PostProductApi(formData));
          setImages({});
          setProductName("");
          setProductDesc("");
          setPriceBeforeDescount("السعر قبل الخصم");
          setPriceAfterDescount("سعر المنتج");
          setQty("");
          setMainCategoryId("");
          setSelectedSubCategory('');
          setBrandId("");
          setSelectedColors([]);
        }
    }
    return [AllCategoryData,AllBrandsData,images,productName,onProductNameChange,productDesc,onProductDescChange,
            priceBeforeDescount,onPriceBeforeDescountChange,priceAfterDescount,onPriceAfterDescountChange,qty,
            onQtyChange,onSelectMainCategory,options,onSelect,onRemove,onSelectBrands,showPicker,handleChangeComplete,
            removeColor,handleProductData,setImages,selectedColors,setShowPicker]
}

export default AdminAddProductHook
