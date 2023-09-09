import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import PriceComp from '../../Utilities/PriceComp/PriceComp';
const ItemDetail = ({oneProduct,oneCategory,oneBrand}) => { 
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
                            <li key={index} style={{backgroundColor:`${color}`}}></li>
                                )):null}
                        </ul>
                    </div>
                    <div>
                        <h6>المواصفات:-</h6>
                        <p className="pt-2">{oneProduct.description}</p>
                    </div>
                    <div>
                        <PriceComp price={oneProduct.price}/>
                    </div>
                    <div>
                        <button className='btn'>أضف للعربه </button>
                        <button className='btn'>أضف للمفضله </button>
                    </div>
                </div>
            </Col>
        </Row>
    </section>

  )
};
export default ItemDetail
