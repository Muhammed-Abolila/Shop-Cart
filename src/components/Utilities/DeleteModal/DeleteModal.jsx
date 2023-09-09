const DeleteModal = () => {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h6>تأكيد الحذف</h6>
            <p>هل تريد تأكيد الحذف؟</p>
            <div className="btns">
              <button className="btn btn-primary">التراجع</button>
              <button className="me-3 btn btn-danger">حذف</button>
            </div>
          </div>
        </div>
      )
    }
export default DeleteModal
