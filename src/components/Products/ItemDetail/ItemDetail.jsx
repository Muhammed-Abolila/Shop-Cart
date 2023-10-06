import React, { useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap';
import PriceComp from '../../Utilities/PriceComp/PriceComp';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../../Redux/Actions/CartActions';
import Notifications from '../../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
const ItemDetail = ({oneProduct,oneCategory,oneBrand}) => {
    let dispatch=useDispatch();
    let [selectedColor,setSelectedColor]=useState("");
    let [indexOfselectedColor,setIndexOfSelectedColor]=useState("");
    const onColorChange=(color,index)=>{
        setIndexOfSelectedColor(index)
        setSelectedColor(color)
    };
    let response=useSelector((state)=>state.CartReducer.AddToCart);
    let [notify]=Notifications(response)
    // Add Product To Cart
    const onAddToCart=async()=>{
        if(oneProduct.availableColors.length>=1 && selectedColor==''){
            notify("اختر اللون"); 
        }else{
            await dispatch(AddToCart({
                productId: oneProduct._id,
                color: selectedColor
            }));
            window.location.reload()
        }  
    }
  return ( 
    <section className='item-details my-3 py-4'>
                <Row> 
                    <Col lg={4}>
                    <Carousel>
                        {oneProduct.images?(
                           oneProduct.images.map((image,index)=>{return(
                            <Carousel.Item key={index}>
                                <div className='slider-img'>
                                    <img src={image} alt="" />
                                </div> 
                            </Carousel.Item>
                           )}) 
                        ):null}
                        
                    </Carousel>
                </Col>
                <Col lg={8}>
                    <div className='item-content mt-4 mt-lg-0'>
                    <div>
                        <h6>{oneCategory.name}:-</h6>
                        <p className="pt-2">{oneProduct.title}</p>
                    </div>
                    <div>
                        <h6>الماركه:-</h6>
                        <p className="py-2">{oneBrand.name}</p>
                        <ul>
                            {oneProduct.availableColors?(oneProduct.availableColors.map((color,index)=>
                            <li key={index} style={{backgroundColor:`${color}`,border:indexOfselectedColor===index?"2px solid #000":"2px solid transparent"}} onClick={()=>onColorChange(color,index)}></li>
                                )):null}
                        </ul>
                    </div>
                    <div>
                        <h6>المواصفات:-</h6>
                        <p className="pt-2">{oneProduct.description}</p>
                    </div>
                    <div className='price'>
                        {oneProduct.priceAfterDiscount?(
                            <>
                            <p className="price-before-discount">السعر قبل الخصم :- 
                             <span className="price-before-discount-container">
                                {oneProduct.price}
                                جنيه
                                <span></span>
                             </span> 
                            
                            </p>
                            <p>السعر بعد الخصم :- {oneProduct.priceAfterDiscount} جنيه</p>
                            </>
                        ):(
                            <p>{oneProduct.price} جنيه</p>
                        )}
                        
                    </div>
                    <div>
                        <button className='btn' onClick={onAddToCart}>أضف للعربه</button>
                    </div>
                </div>
            </Col>
        </Row>
        <ToastContainer/>
    </section>

  )
};
export default ItemDetail
