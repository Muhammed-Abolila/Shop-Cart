import UserSingleOrder from '../UserSingleOrder/UserSingleOrder';
import { Row, Col } from 'react-bootstrap';
const UserAllOrders = ({ordersData}) => { 
  return (
    <div className="user-orders-comp">
      <div className="user-order-head">
        <h4>Order Number #{ordersData.id}</h4>
      </div>
      <div className="user-order-body">
        {ordersData?ordersData.cartItems.map((data,index)=><UserSingleOrder key={index} singleOrder={data}/>):null}
      </div>
      <div className="user-order-footer">
        <Row>
          <Col xs={12} sm={8} md={9}>
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
          </Col>
          <Col xs={12} sm={4} md={3}>
            <div className="price">
              <h4>Total Price:- </h4>
              <p>{ordersData.totalOrderPrice} EGP</p>
            </div>
          </Col>
        </Row>
          
          
      </div>
    </div>
  )
}

export default UserAllOrders 
