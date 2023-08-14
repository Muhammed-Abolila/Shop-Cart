import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import imgSlider from "../../../assets/image/best seller/voox.jpg";
import PriceComp from '../../Utilities/PriceComp/PriceComp';
const ItemDetail = () => {
  return (
    <section className='item-details my-3 py-4'>
        <Row>
            <Col lg={4}>
                <Carousel>
                    <Carousel.Item>
                        <div className='slider-img'>
                            <img src={imgSlider} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider-img'>
                            <img src={imgSlider} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider-img'>
                            <img src={imgSlider} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider-img'>
                            <img src={imgSlider} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider-img'>
                            <img src={imgSlider} alt="" />
                        </div>
                    </Carousel.Item>
        
                </Carousel>
            </Col>
            <Col lg={8}>
                <div className='item-content mt-4 mt-lg-0'>
                    <div>
                        <h6>الإلكترونيات:-</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, hic.</p>
                    </div>
                    <div>
                        <h6>الماركه:-</h6>
                        <p>سامسونج</p>
                        <ul>
                            <li style={{backgroundColor:'yellow'}}></li>
                            <li style={{backgroundColor:'red'}}></li>
                            <li style={{backgroundColor:'black'}}></li>
                        </ul>
                    </div>
                    <div>
                        <h6>المواصفات:-</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime quam deleniti maiores minima quod ea, sed necessitatibus temporibus, quibusdam architecto illum? Explicabo quam veritatis libero doloribus tenetur! Itaque, at.</p>
                    </div>
                    <div>
                        <PriceComp />
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
