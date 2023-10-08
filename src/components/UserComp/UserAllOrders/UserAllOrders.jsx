import UserSingleOrder from '../UserSingleOrder/UserSingleOrder';
const UserAllOrders = ({ordersData}) => { 
  return (
    <div className="user-orders-comp">
      <div className="user-order-head">
        <h4>الطلب رقم #{ordersData.id}</h4>
      </div>
      <div className="user-order-body">
        {ordersData?ordersData.cartItems.map((data,index)=><UserSingleOrder key={index} singleOrder={data}/>):null}
      </div>
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
    </div>
  )
}

export default UserAllOrders 
