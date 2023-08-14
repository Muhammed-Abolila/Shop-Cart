import { Col, Container, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import img1 from "../../../assets/image/product/product-01.jpg";
import img2 from "../../../assets/image/product/product-02.jpg";
import img3 from "../../../assets/image/product/product-03.jpg";
import img4 from "../../../assets/image/product/product-04.jpg";
const ProductContainer = ({title,btnName,pathName}) => {
  return (
    <section className='mt-5'> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        <Col xs={6} lg={3}>
          <ProductCard img={img1}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={img2}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={img3}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={img4}/>
        </Col>
      </Row>
  </section> 
  )
}

export default ProductContainer
