import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import thumb from "../../../assets/image/item.png";
const ProductContainer = ({title,btnName,pathName}) => {
  return (
    <section className='mt-5'> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        <Col xs={6} lg={3}>
          <ProductCard img={thumb}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={thumb}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={thumb}/>
        </Col>
        <Col xs={6} lg={3}>
          <ProductCard img={thumb}/>
        </Col>
      </Row>
  </section> 
  )
}

export default ProductContainer
