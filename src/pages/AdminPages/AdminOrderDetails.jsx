import AdminSingleOrder from "../../components/AdminComp/AdminSingleOrder/AdminSingleOrder";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetSpacificOrder } from "../../Redux/Actions/OrdersActions";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const AdminOrderDetails = () => {
    let dispatch=useDispatch()
    let {id}=useParams();
    useEffect(() => {
        let get=()=>{
            dispatch(GetSpacificOrder(id))
        };
        get()
    }, []);
    let spacificOrderResponse=useSelector((state)=>state.OrderReducer.GetSpacificOrder);
    let spacificOrderResponseData;
    try{
        if(spacificOrderResponse){
            spacificOrderResponseData=spacificOrderResponse.data;
        }
    }catch(e){};
  return (
      <section className="pageStyle my-5">
          <Container>
          {spacificOrderResponseData?(
            <div className="user-orders-comp">
                <div className="user-order-head">
                <h4>Order Number #{spacificOrderResponseData.id}</h4>
                </div>
                <div className="user-order-body">
                {spacificOrderResponseData?spacificOrderResponseData.cartItems.map((data,index)=><AdminSingleOrder key={index} singleOrder={data}/>):null}
                </div>
                <Link to="/admin/orders">
                <button className="btn btn-style">Back</button>
                </Link>
            </div>
      ):(<h2>There Is No Data </h2>)}
          </Container>
      </section>
  )
}

export default AdminOrderDetails
