import {useSelector,useDispatch} from "react-redux";
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { postSubCategoryData } from '../../Redux/Actions/SubCategoryActions';
import { useState, useEffect } from 'react';
import Notifications from "../Notifications";
const AdminAddSubCategoryHook = () => {
    let SubCategoryData=useSelector((state)=>state.subCategoryReducer.subCategoryApi);
    let [notify]=Notifications(SubCategoryData);
    let [name,setName]=useState("");
    let [id,setId]=useState("0");
    let dispatch=useDispatch();
   //  get data from categoryApi to loop
   let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi);
    useEffect(() => {
     dispatch(getCategoryApi());
     }, []);
     
   // on admin Change Sub Category Name
    const onSubNameChange=(e)=>{
     setName(e.target.value);
    };
   // on admin Change Main Category Name
    const onMainCategoryChange=(e)=>{
     setId(e.target.value);
    };
   //  on  Admin Send Data To Back-End
   const handleSubCategoryData=()=>{
     if(!navigator.onLine){
      notify("الرجاء الإتصال بالإنترنت");
     }else{
      if(name===""){
        notify("من فضلك أدخل إسم التصنيف الفرعي");
      }else if(id==="0"){
        notify("من فضلك إختر التصنيف الرئيسي");
      }else{
        dispatch(postSubCategoryData({name:name,category:id}));
        setName("");
        setId("0");
      }
     }
     
   };
   return [name,CategoryData,onSubNameChange,onMainCategoryChange,handleSubCategoryData];
}

export default AdminAddSubCategoryHook;
