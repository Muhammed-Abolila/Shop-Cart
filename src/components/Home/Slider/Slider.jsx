import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from "../../../assets/image/header/main-banner.png";
import sliderImg2 from "../../../assets/image/header/main-banner2.png";
const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item className='slider-item' style={{backgroundImage:`url(${sliderImg1})` }}>
          <Carousel.Caption className='slider-caption'>
            <div className="content">
              <h2>Limited Offer 50% Off</h2>
              <h3>Playing Video <br/>Games</h3>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider-item' style={{backgroundImage:`url(${sliderImg2})` }}>
          <Carousel.Caption className='slider-caption'>
            <div className="content">
              <h2>Limited Offer 50% Off</h2>
              <h3>New Wireless<br/>Speaker</h3>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;

