import { useState, useEffect } from 'react'
const UserProfileDetailsHook = () => {
    let user =JSON.parse(localStorage.getItem("user"));
    let [showUpdateModal,setShowUpdateModal]=useState(false);
    const ShowUpdateModalFun=()=>{
      setShowUpdateModal(true)
    }
    return [user,ShowUpdateModalFun,showUpdateModal,setShowUpdateModal]
}

export default UserProfileDetailsHook
