import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import img1 from "../../../assets/image/arcaya.jpg";
import img2 from "../../../assets/images/clothe.png";
import img3 from "../../../assets/images/labtop.png";
import img4 from "../../../assets/images/mobile.png";
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
