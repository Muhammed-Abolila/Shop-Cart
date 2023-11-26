import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOneProductCart, UpdateProductQuantity } from '../../../Redux/Actions/CartActions';
import Notifications from '../../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
import { BaseUrl } from '../../../Redux/Type/Type';
import { Link } from 'react-router-dom';
const CartItem =({data,reload,setReload}) => {
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
                    <Col className='col-4'>
                        <div className="img-container">
                            <Link to={`/details/${data.product._id}`}>
                                <img src={`${BaseUrl}/products/${data.product.imageCover}`} alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col className='col-8'>
                        <div className='cart-content'>
                            <div>
                                <h3 className='mb-2'>Title:-</h3>
                                <span>{data.product.title}</span>
                            </div>
                            <div>
                                <h3 className='mb-2'>Category:-</h3>
                                <span>{data.product.category.name}</span>
                            </div>
                            <div>
                                <h3 className='mb-2'>Brand:-</h3>
                                <span>{data.product.brand&&data.product.brand.name}</span>
                            </div>
                            <div>
                                <h3 className='mb-2'>Color:-</h3>
                                <div className='color' style={{backgroundColor:`${data.color}`}}></div>
                            </div>
                            <div className='quantaty d-flex '>
                                <h3>Quantity:- </h3>
                                <input
                                    min={0}
                                    value={qntValue}
                                    onChange={onQntChange}
                                    type="number"/>
                                <button className="btn btn-style" onClick={changeQty}>Apply</button>
                            </div> 
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col className='col-2'>
            <div className='cart-left'>
                <DeleteBtn text={data.product.title} data={data} onDelete={onDeleteProductCart}/>
            </div>
        </Col>
        <hr/>
        <div className="price">
            <h3>Item Price:- </h3>
            <span>{data.price} EGP</span>
        </div>
      </Row>
      <ToastContainer/>
    </div>
  )
}

export default CartItem
