import React,{ useState, useEffect } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandsApi } from '../../../Redux/Actions/BrandActions';
import { getCategoryApi } from '../../../Redux/Actions/CategoryAction';
import { getSubCategoryDataWithMaincategoryId } from '../../../Redux/Actions/SubCategoryActions';
const AddProduct = () => {
  let dispatch=useDispatch();
  // Access To Category Data for Loop
  let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi.data);
  // Access To Brand Data for Loop
  let AllBrandsData=useSelector((state)=>state.BrandReducer.BrandApi.data);
  useEffect(() => {
    dispatch(getCategoryApi());
    dispatch(getBrandsApi());
    }, []);
  const [images, setImages] = useState({});
  const [productName,setProductName]=useState("");
  const [productDesc ,setProductDesc]=useState("");
  const [priceBeforeDescount,setPriceBeforeDescount]=useState("السعر قبل الخصم");
  const [priceAfterDescount,setPriceAfterDescount]=useState("سعر المنتج");
  const [qty,setQty]=useState("الكميه");
  const [mainCategoryId,setMainCategoryId]=useState("");
  const [brandId,setBrandId]=useState("");
  // Admin Change Product Name
  const onProductNameChange=(e)=>{
    setProductName(e.target.value);
  }
  //  Admin Change Product Description
  const onProductDescChange=(e)=>{
    setProductDesc(e.target.value);
  }
   //  Admin Change Price Before Descount
   const onPriceBeforeDescountChange=(e)=>{
    setPriceBeforeDescount(e.target.value);
   }
    //  Admin Change Price After Descount
    const onPriceAfterDescountChange=(e)=>{
      setPriceAfterDescount(e.target.value);
     }
   //  Admin Change Quantaty
    const onQtyChange=(e)=>{
      setQty(e.target.value);
     }
    // Admin Select Main Category 
    const onSelectMainCategory=(e)=>{
      if(e.target.value!=0){
       dispatch(getSubCategoryDataWithMaincategoryId(e.target.value))
      }
      setMainCategoryId(e.target.value);
    }
    // Admin Select Brands
    const onSelectBrands=(e)=>{
      setBrandId(e.target.value);
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
        <input className="form-control input-style" type="text" placeholder=' اسم  المنتج' value={productName} onChange={onProductNameChange}/>
        <textarea className="form-control mt-3 input-style" name="" id="" cols="30" rows="3" placeholder='وصف المنتج' value={productDesc} onChange={onProductDescChange}></textarea>
        <input className="form-control mt-3 input-style" type="number" placeholder='السعر قبل الخصم' value={priceBeforeDescount} onChange={onPriceBeforeDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder=' سعر  المنتج'  value={priceAfterDescount} onChange={onPriceAfterDescountChange}/>
        <input className="form-control mt-3 input-style" type="number" placeholder='الكميه'  value={qty} onChange={onQtyChange}/>
        <select className="form-control mt-3 input-style" onChange={onSelectMainCategory}>
          <option value={0}>التصنيف الرئيسى</option>
          {CategoryData?(CategoryData.map((item)=><option value={item._id}>{item.name}</option>)):null}
        </select>
        <select className="form-control mt-3 input-style">
          <option value="" selected>التصنيف الفرعي</option>
          <option value="">التصنيف الثاني</option>
          <option value="">التصنيف الثالث</option>
          <option value="">التصنيف الرابع</option>
          <option value="">التصنيف الخامس</option>
        </select>
        <select className="form-control mt-3 input-style" onChange={onSelectBrands}>
          <option value={0}>الماركه</option>
          {AllBrandsData?(AllBrandsData.map((item)=><option value={item._id}>{item.name}</option>)):null}
        </select>
        <div className='text-start'>
          <button className='btn'>حفظ التعديلات</button>
        </div>
    </div>
  )
};
export default AddProduct;
