import { PostProductApi, updateProduct } from '../../Redux/Actions/ProductActions';
import Notifications from '../../CustomHooks/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandsApi } from '../../Redux/Actions/BrandActions';
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { getSubCategoryDataWithMaincategoryId } from '../../Redux/Actions/SubCategoryActions';
import { useState, useEffect } from 'react';
const AdminEdditProductHook = (id) => {
    let dispatch=useDispatch();
  // Access To Category Data for Loop
  let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi.data);
  // Access To Brand Data for Loop
  let AllBrandsData=useSelector((state)=>state.BrandReducer.BrandApi.data);
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
    let subCategoryDataDependCategoryId=useSelector((state)=>state.subCategoryReducer.subCategoryApi.data)
    // Show Sub Category Depend On Category Id
    const [options,setOptions]=useState([]);
    const [selectedSubCategory,setSelectedSubCategory]=useState([])
      useEffect(()=>{
        if(subCategoryDataDependCategoryId!==""||subCategoryDataDependCategoryId!==0){
          setOptions(subCategoryDataDependCategoryId)
        }
      },[subCategoryDataDependCategoryId])
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
  };
  // Notification
  // let notifyStatus=useSelector((state)=>state.ProductReducer.CreateProductApi);
  // let [notify]=Notifications(notifyStatus)
    // Admin Send Data To Api
    const handleProductData=()=>{
        
    }
    return [CategoryData,AllBrandsData,images,productName,onProductNameChange,productDesc,onProductDescChange,
            priceBeforeDescount,onPriceBeforeDescountChange,priceAfterDescount,onPriceAfterDescountChange,qty,
            onQtyChange,onSelectMainCategory,options,onSelect,onRemove,onSelectBrands,showPicker,handleChangeComplete,
            removeColor,handleProductData,setImages,selectedColors,setShowPicker]
}

export default AdminEdditProductHook
