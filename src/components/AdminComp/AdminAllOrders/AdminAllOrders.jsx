import { Link } from 'react-router-dom';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AdminAllOrdersHook from '../../../CustomHooks/Orders/AdminAllOrdersHook';
const AdminAllOrders = ({ordersData,reloadAfterChange,setReloadAfterChange}) => {
 let [isPaidChange,onSendPaid,isDeliverChange,onSendDeliver]=AdminAllOrdersHook(ordersData,reloadAfterChange,setReloadAfterChange);
 return (
  <div className="admin-orders-comp">
  <div className="admin-order-head">
    <h4>Order Number #{ordersData.id}</h4>
  </div>
  <Row>
    <Col>
        <div>
        <div className="d-flex">
          <p>Date:- </p>
          <p>{ordersData.user.phone}</p>
        </div>
        <div className="d-flex">
          <p>Customer Name:- </p>
          <p>{ordersData.user.name}</p>
        </div>
        <div className="d-flex">
          <p>E-mail:- </p>
          <p>{ordersData.user.email}</p>
        </div>
        
      </div>
    </Col>
    <Col>
      <div>
        <div className="d-flex">
          <p>Shipping To:- </p>
          <p>{ordersData.shippingAddress.details}</p>
        </div>
        <div className="d-flex">
          <p>Shipping Address:- </p>
          <p>{ordersData.shippingAddress.city}</p>
        </div>
        <div className="d-flex">
          <p>Phone:- </p>
          <p>{ordersData.shippingAddress.phone}</p>
        </div>
      </div>
    </Col>
    <Link to={`/admin/order-details/${ordersData._id}`} className="text-center mt-4">
      <button className="btn btn-style">Order Details</button>
    </Link>
  </Row>
  <hr className="mt-1 mb-4"/>
  <div className="admin-order-footer">
      <div className="status">
        <h4>Deliver:- 
          {ordersData.isDelivered===false?(<span> Not Delivered</span>):(<span> Delivered</span>)}
        </h4>
        <h4>Payment Status:-  
        {ordersData.isPaid===false?(<span> Not Done</span>):(<span> Done</span>)}
        </h4>
        <h4>Payment Method:- 
          {ordersData.paymentMethodType==="cash"?(<span> Cash</span>):(<span> Credit Card</span>)}
        </h4>
      </div>
      <div className="price">
        <h4>Total Price:- </h4>
        <span>{ordersData.totalOrderPrice} EGP</span>
      </div>
  </div>
  <div className="admin-change-inputs mt-4">
    <div className="d-flex mb-3 mb-md-0">
      <Dropdown>
        <Dropdown.Toggle className="btn-style">
          Payment Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>isPaidChange('')}>
            <p>Payment Status</p>
            <hr/>
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>isPaidChange(true)}>
            <p>Done</p>
            <hr/>
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>isPaidChange(false)}>
            <p>Not Done</p>
            <hr/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button className="btn btn-style" onClick={onSendPaid}>Save</button>
    </div>
    <div className="d-flex">
      <Dropdown>
        <Dropdown.Toggle className="btn-style">
          Deliver Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>isDeliverChange('')}>
            <p>Deliver Status</p>
            <hr/>
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>isDeliverChange(true)}>
            <p>Delivered</p>
            <hr/>
          </Dropdown.Item>
          <Dropdown.Item onClick={()=>isDeliverChange(false)}>
            <p>Not Delivered</p>
            <hr/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button className="btn btn-style" onClick={onSendDeliver}>Save</button>
    </div>
  </div>
  <ToastContainer/>
</div>
  )
};

export default AdminAllOrders
