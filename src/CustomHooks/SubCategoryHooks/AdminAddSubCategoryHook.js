import {useSelector,useDispatch} from "react-redux";
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { postSubCategoryData } from '../../Redux/Actions/SubCategoryActions';
import { useState, useEffect } from 'react';
import Notifications from "../Notifications";
const AdminAddSubCategoryHook = () => {
    let SubCategory=useSelector((state)=>state.subCategoryReducer.subCategoryApi);
    let SubCategoryData=[];
    try{
      if(SubCategory){
        SubCategoryData=SubCategory
      }
    }catch(e){}
    let [notify]=Notifications(SubCategoryData);
    let [name,setName]=useState("");
    let [id,setId]=useState("0");
    let dispatch=useDispatch();
   useEffect(() => {
     dispatch(getCategoryApi());
    },[]);   
     // get data from categoryApi to loop
   let Category=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
   let catData=[]
   try{
    if(Category){
      catData=Category.data
     }else{
      catData=[]
     };
   }catch(e){}
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
   return [name,catData,onSubNameChange,onMainCategoryChange,handleSubCategoryData];
}

export default AdminAddSubCategoryHook;
