const DeleteModal = ({text,data,onDelete,setShowDeleteModal}) => {  
  const undoDeletion=()=>{
    setShowDeleteModal(false)
  }
  const confirmDeletion=()=>{
    onDelete(data._id);
    setShowDeleteModal(false);
  }; 
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h5>Delete Confirmation:-</h5>
            <p>Do you want to delete <span className="text-danger fw-bold fs-5">{text}</span> ?</p>
            <div className="btns">
              <button className="btn btn-style" onClick={undoDeletion}>Back</button>
              <button className="btn delete-btn" onClick={confirmDeletion}>Delete</button>
            </div>
          </div>
        </div>
      )
  };
export default DeleteModal
