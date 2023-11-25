import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { UpdateUserPassword } from "../../Redux/Actions/UserProfileActions";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "../../CustomHooks/Notifications";
const UserEdditPasswordHook = () => {
    let dispatch=useDispatch();
    let Navigate=useNavigate()
    let [oldPass,setOldPass]=useState('');
    let [newPass,setNewPass]=useState('');
    let [newRePass,setNewRePass]=useState('');
    let [loading,setLoading]=useState(true);
    const onOldPassChange=(e)=>{
      setOldPass(e.target.value)
    };
    const onNewPassChange=(e)=>{
      setNewPass(e.target.value)
    };
    const onNewRePassChange=(e)=>{
      setNewRePass(e.target.value)
    };
    let response=useSelector((state)=>state.UserProfileReducer.UpdateUserPassWord);
    let [notify]=Notifications(response);
    const handleClick=async()=>{
      if(oldPass==""){
        notify("Insert Old Password");
      }else if(newPass==""){
        notify("Insert New Password");
      }else if(newRePass==""){
        notify("RePassword");
      }else if(newRePass!=newPass){
        notify("Password does not match");
      }else{
        setLoading(true);
        await dispatch(UpdateUserPassword({
          "currentPassword":oldPass,
          "password":newPass,
          "passwordConfirm":newRePass
        }));
        setLoading(false);
      }
    };
    useEffect(()=>{
      if(loading==false){
        if(response){
          if(response.status==200){
              notify(response.statusText);
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              setTimeout(()=>{
                Navigate("/login");
                window.location.reload()
              },1500);
            }else if(response.status !==200){
              notify(response.data.message);
            }
          }
      }
    },[loading]);
    return [oldPass,onOldPassChange,newPass,onNewPassChange,newRePass,onNewRePassChange,handleClick]
}

export default UserEdditPasswordHook
