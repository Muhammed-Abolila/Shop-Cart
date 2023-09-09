import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import GrowExample from '../../Utilities/Spinner/Spinner';
const ProductContainer = ({ProductData,title,btnName,pathName}) => {
  return (
    <section className='mt-5'> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        {ProductData?(
          ProductData.slice(0,4).map((product,index)=>{
            return(
              <Col xs={6} lg={3} key={index}>
                <ProductCard CardProductData={product}/>
              </Col>
            )
          })
        ):<GrowExample/>}
      </Row>
  </section> 
  )
}; 

export default ProductContainer
