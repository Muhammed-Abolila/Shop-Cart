import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import GrowExample from '../../Utilities/Spinner/Spinner';
import ProductContainerHook from '../../../CustomHooks/ProductsHooks/ProductContainerHook';
import Spinner from '../../Utilities/Spinner/Spinner';
const ProductContainer = ({ProductData,title,btnName,pathName}) => {
   let[favProduct]=ProductContainerHook()
  return (
    <section> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        {ProductData?(
          ProductData.map((product,index)=>{
            return(
              <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} lg={{ span: 3, offset: 0 }} key={index}>
                <ProductCard CardProductData={product} favProduct={favProduct}/>
              </Col>
            )
          })
        ):<Spinner/>}
      </Row>
  </section> 
  )
}; 
export default ProductContainer
