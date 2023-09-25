import {RiDeleteBin5Line} from 'react-icons/ri';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
const DeleteBtn = ({data,onDelete}) => {
  let [showDeleteModal,setShowDeleteModal]=useState(false);
  const showDeleteModalFunc=()=>{
    setShowDeleteModal(true)
  }
  return ( 
    <>
      <span  onClick={showDeleteModalFunc} className="delete-icon"><RiDeleteBin5Line/></span>
      {showDeleteModal==true?(<DeleteModal data={data} onDelete={onDelete} setShowDeleteModal={setShowDeleteModal}/>):null}
    </>   
  )
}; 
export default DeleteBtn
