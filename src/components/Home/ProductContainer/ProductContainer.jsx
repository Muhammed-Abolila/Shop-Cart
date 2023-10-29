import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import GrowExample from '../../Utilities/Spinner/Spinner';
import ProductContainerHook from '../../../CustomHooks/ProductsHooks/ProductContainerHook';
const ProductContainer = ({ProductData,title,btnName,pathName}) => {
   let[favProduct]=ProductContainerHook()
  return (
    <section> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        {ProductData?(
          ProductData.map((product,index)=>{
            return(
              <Col xs={12} sm={6} lg={3} key={index}>
                <ProductCard CardProductData={product} favProduct={favProduct}/>
              </Col>
            )
          })
        ):<GrowExample/>}
      </Row>
  </section> 
  )
}; 
export default ProductContainer
