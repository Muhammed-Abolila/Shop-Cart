const DeleteModal = ({data,onDelete,setShowDeleteModal}) => {
  const undoDeletion=()=>{
    setShowDeleteModal(false)
  }
  const confirmDeletion=()=>{
    onDelete(data._id);
    setShowDeleteModal(false)
  }; 
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h6>تأكيد الحذف</h6>
            <p>هل تريد حذف <span className="text-danger fw-bold fs-5">{data.name||data.title||data.alias||'التعليق'}</span> بالتأكيد ؟ </p>
            <div className="btns">
              <button className="btn back-btn" onClick={undoDeletion}>التراجع</button>
              <button className="me-3 btn delete-btn" onClick={confirmDeletion}>حذف</button>
            </div>
          </div>
        </div>
      )
  };
export default DeleteModal
