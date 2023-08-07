
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg from "../../../assets/image/google.jpg"
const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item className='slider-item'>
        <div className='caption-container'>
          <div className="img-container">
            <img src={sliderImg} alt="" />
          </div>
          <Carousel.Caption className='slider-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='caption-container'>
          <div className="img-container">
            <img src={sliderImg} alt="" />
          </div>
          <Carousel.Caption className='slider-caption'>
            <h3>second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='caption-container'>
          <div className="img-container">
            <img src={sliderImg} alt="" />
          </div>
          <Carousel.Caption className='slider-caption'>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
};
export default Slider;

