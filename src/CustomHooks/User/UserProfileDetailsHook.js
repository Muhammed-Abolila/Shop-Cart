import { useState} from 'react'
const UserProfileDetailsHook = () => {
    let userProfile =JSON.parse(localStorage.getItem("user"));
    let [showUpdateModal,setShowUpdateModal]=useState(false);
    const ShowUpdateModalFun=()=>{
      setShowUpdateModal(true)
    }
    
    return [userProfile,ShowUpdateModalFun,showUpdateModal,setShowUpdateModal]
}

export default UserProfileDetailsHook
