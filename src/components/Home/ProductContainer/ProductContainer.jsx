import { Container, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard';
import img1 from "../../../assets/image/product/product-01.jpg";
import img2 from "../../../assets/image/product/product-02.jpg";
import img3 from "../../../assets/image/product/product-03.jpg";
import img4 from "../../../assets/image/product/product-04.jpg";
const ProductContainer = ({title,btnName}) => {
  return (
    <section>
      
    <Container>
      <SubTitle title={title} btnName={btnName}/>
      <Row>
        <ProductCard img={img1}/>
        <ProductCard img={img2}/>
        <ProductCard img={img3}/>
        <ProductCard img={img4}/>
      </Row>
    </Container>
    
  </section>
  )
}

export default ProductContainer
