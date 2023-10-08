import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AdminAllOrdersHook from '../../../CustomHooks/Orders/AdminAllOrdersHook';
const AdminAllOrders = ({ordersData}) => {
 let [isPaidChange,onSendPaid,isDeliverChange,onSendDeliver]=AdminAllOrdersHook(ordersData)
  return (
    <div className="user-orders-comp">
      <div className="user-order-head">
        <h4>الطلب رقم #{ordersData.id}</h4>
      </div>
      <Row>
        <Col>
            <div>
            <div className="d-flex">
              <p>تاريخ الطلب :- </p>
              <p>{ordersData.user.phone}</p>
            </div>
            <div className="d-flex">
              <p>إسم العميل:- </p>
              <p>{ordersData.user.name}</p>
            </div>
            <div className="d-flex">
              <p> البريد الإلكتروني:- </p>
              <p>{ordersData.user.email}</p>
            </div>
            
          </div>
        </Col>
        <Col>
          <div>
            <div className="d-flex">
              <p>الشحن إلي:- </p>
              <p>{ordersData.shippingAddress.details}</p>
            </div>
            <div className="d-flex">
              <p>عنوان الشحن:- </p>
              <p>{ordersData.shippingAddress.city}</p>
            </div>
            <div className="d-flex">
              <p>رقم الهاتف:- </p>
              <p>{ordersData.shippingAddress.phone}</p>
            </div>
          </div>
        </Col>
        <Link to={`/admin/order-details/${ordersData._id}`} className="text-center">
          <button className="btn btn-primary">تفاصيل الطلب</button>
        </Link>
      </Row>
      <hr className="my-4"/>
      <div className="user-order-footer">
          <div className="status">
            <h4>التوصيل:- 
              {ordersData.isDelivered===false?(<span>لم يتم التوصيل</span>):(<span>تم التوصيل</span>)}
            </h4>
            <h4>الحاله:-  
            {ordersData.isPaid===false?(<span>لم يتم الدفع</span>):(<span>تم الدفع</span>)}
            </h4>
            <h4>طريقه الدفع :- 
              {ordersData.paymentMethodType==="cash"?(<span> عند الإستلام </span>):(<span>بطاقه الإئتمانيه</span>)}
            </h4>
          </div>
          <div className="price">
            <h4>{ordersData.totalOrderPrice} جنيه</h4>
          </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="ms-2">
          <select onChange={isPaidChange}>
            <option value="0">حاله الدفع</option>
            <option value="true">تم الدفع</option>
            <option value="false">لم يتم الدفع</option>
          </select>
          <button className="btn btn-primary" onClick={onSendPaid}>حفظ</button>
        </div>
        <div className="me-2">
          <select onChange={isDeliverChange}>
            <option value="0">حاله التوصيل</option>
            <option value="true">تم التوصيل</option>
            <option value="false">لم يتم التوصيل</option>
          </select>
          <button className="btn btn-primary" onClick={onSendDeliver}>حفظ</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default AdminAllOrders
