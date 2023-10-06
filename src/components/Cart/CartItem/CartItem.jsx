import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import thumb from "../../../assets/image/item.png";
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOneProductCart, UpdateProductQuantity } from '../../../Redux/Actions/CartActions';
import Notifications from '../../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
import { BaseUrl } from '../../../Redux/Type/Type';
const CartItem = ({data,reload,setReload}) => {
    let dispatch=useDispatch();
    let [qntValue,setQntValue]=useState(data.count);
    const onQntChange=(e)=>{
        setQntValue(e.target.value)
    };
    // On Update Product Quantity
    const changeQty=async()=>{
        await dispatch(UpdateProductQuantity(data._id,{
            count: qntValue
        }));
        setReload(!reload)
    };
    // On Delete One Product
    const onDeleteProductCart=async(productId)=>{
            await dispatch(DeleteOneProductCart(productId));
            setReload(!reload)
    };
    let deleteResponse=useSelector((state)=>state.CartReducer.DeleteOneProduct);
    let [notify]=Notifications(deleteResponse)
  return (
    <div className='cart-item'>
      <Row>
        <Col  className='col-10'>
            <div className='cart-right '>
                <Row>
                    <Col className='col-3'>
                        <div className="img-container">
                            <img src={`${BaseUrl}/products/${data.product.imageCover}`} alt="" />
                        </div>
                    </Col>
                    <Col className='col-9'>
                        <div className='cart-content'>
                            <div>
                                <h6>{data.product.title}</h6>
                            </div>
                            <div>
                                <h6 className='mb-2'>التصنيف:- <span>{data.product.category.name}</span></h6>
                            </div>
                            <div>
                                <h6 className='mb-2'>الماركه:- <span>{data.product.brand&&data.product.brand.name}</span></h6>
                                <span className='color' style={{backgroundColor:`${data.color}`}}></span>
                            </div>
                            <div className='quantaty d-flex '>
                                <h6>الكميه</h6>
                                <input
                                    min={0}
                                    value={qntValue}
                                    onChange={onQntChange}
                                    type="number"/>
                                <button className="btn" onClick={changeQty}>تطبيق</button>
                            </div> 
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col className='col-2'>
            <div className='cart-left'>
                <div>
                    <DeleteBtn data={data} onDelete={onDeleteProductCart}/>
                </div>
                <h6>{data.price} جنيه</h6>
            </div>
        </Col>
      </Row>
      <ToastContainer/>
    </div>
  )
}

export default CartItem
