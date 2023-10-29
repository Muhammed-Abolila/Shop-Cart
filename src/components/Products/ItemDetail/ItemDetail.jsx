import React, { useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap';
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
            notify("Choose Color!"); 
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
                    <div className='item-content mt-4'>
                    <Row>
                        <Col md={6}>
                        <div className="title">
                            <h2>Title :-</h2>
                            <p className=" mt-2">{oneProduct.title}</p>
                        </div>
                        <div className="category">
                            <h2>Category :-</h2>
                            <p className=" mt-2">{oneCategory.name}</p>
                        </div>
                        <div className="brand">
                            <h2>Brand :-</h2>
                            <p className=" mt-2">{oneBrand.name}</p>
                        </div>
                        </Col>
                        <Col md={6}>
                        {oneProduct.availableColors?(
                            <div className="color">
                                <h2>Colors :-</h2>
                                <ul className="color">
                                    {oneProduct.availableColors.map((color,index)=>
                                        <li key={index} className=" mt-2" style={{backgroundColor:`${color}`,border:indexOfselectedColor===index?"2px solid #000":"2px solid transparent"}} onClick={()=>onColorChange(color,index)}></li>
                                        )}
                                </ul>
                            </div>
                            ):null}
                            <div className="details">
                                <h2>Details:-</h2>
                                <p className=" mt-2">{oneProduct.description}</p>
                            </div>
                            <div className='price'>
                                {oneProduct.priceAfterDiscount?(
                                    <>
                                    <h2>Price :- </h2>
                                    <div className="price-container mt-2">
                                        <p className="me-2 price-offer">{oneProduct.price} EGP
                                        <span></span>
                                        </p> 
                                        <p>{oneProduct.priceAfterDiscount} EGP</p>
                                    </div>
                                    </>
                                ):(
                                    <>
                                    <h2>Price :- </h2>
                                    <p>{oneProduct.price} EGP</p>
                                    </> 
                                )}
                                
                            </div>
                        </Col>
                    </Row>
                    <div className="add-btn">
                        <button className='btn' onClick={onAddToCart}>Add To Cart</button>
                        <button className='btn' onClick={onAddToCart}>Add To Wish List</button>
                    </div>
                </div>
            </Col>
        </Row>
        <ToastContainer/>
    </section>

  )
};
export default ItemDetail
