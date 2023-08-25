import {useState } from 'react';
import imgLogo from "../../assets/image/img-logo.png";
import { useDispatch } from 'react-redux';
import { postCategoryDataWithImage } from '../../Redux/Actions/CategoryAction';
import Notifications from '../../CustomHooks/Notifications';
const AdminAddCategoryHook = () => {
    let notify=Notifications()
    let [CategoryImg,setCategoryImg]=useState(imgLogo);
    let [CategoryName,setCategoryName] = useState("");
    let [selectedImage,setSelectedImage]=useState(null);
    let dispatch=useDispatch();
    // when Admin Choose Category Image
    const onImageChange=(e)=>{
      if(e.target.files&&e.target.files[0]){
        setCategoryImg(URL.createObjectURL(e.target.files[0]));
        setSelectedImage(e.target.files[0]);
      }else{
        setCategoryImg(imgLogo);
      } 
    };
    // When Admin Write Category Name 
    const onNameChange=(e)=>{
      setCategoryName(e.target.value);
    };
    // When Admin Click Save Button
    const handleCategoryData=()=>{
        if(selectedImage==null){
          notify("من فضلك ادخل صوره الصنف");
          return;
        }else if(CategoryName==""){
          notify("من فضلك ادخل اسم الصنف");
          return;
        } 
        let formData=new FormData()
        formData.append("name",CategoryName);
        formData.append("image",selectedImage);
        dispatch(postCategoryDataWithImage(formData));
        setCategoryImg(imgLogo);
        setCategoryName("");   
    }
    return [CategoryImg,onImageChange,onNameChange,CategoryName,handleCategoryData]
}
export default AdminAddCategoryHook;
