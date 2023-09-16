import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../Redux/Actions/ProductActions";
const DeleteModal = ({showModalFunc,showModal,productName,productIdToDelete}) => {
  let dispatch=useDispatch()
  const undoDeletion=()=>{
    showModalFunc(!showModal)
  }
  const confirmDeletion=()=>{
    dispatch(deleteProduct(productIdToDelete));
    showModalFunc(!showModal);
    window.location.reload()
  }; 
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h6>تأكيد الحذف</h6>
            <p>هل تريد حذف <span className="text-danger fw-bold fs-5">{productName}</span> بالتأكيد ؟ </p>
            <div className="btns">
              <button className="btn btn-primary" onClick={undoDeletion}>التراجع</button>
              <button className="me-3 btn btn-danger" onClick={confirmDeletion}>حذف</button>
            </div>
          </div>
        </div>
      )
  }
export default DeleteModal
