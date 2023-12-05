import { Col, Row } from 'react-bootstrap';
import SubTitle from '../../Utilities/SubTitle/SubTitle';
import ProductCard from '../../Products/ProductCard/ProductCard';
import ProductContainerHook from '../../../CustomHooks/ProductsHooks/ProductContainerHook';
import NoProductYet from '../../Utilities/NoProductYet/NoProductYet';
const ProductContainer = ({ProductData,title,btnName,pathName}) => {
   let[favProduct]=ProductContainerHook()
  return (
    <section> 
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        {ProductData.length>=1?(
          ProductData.map((product,index)=>{
            return(
              <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} lg={{ span: 3, offset: 0 }} key={index}>
                <ProductCard CardProductData={product} favProduct={favProduct}/>
              </Col>
            )
          })
        ):<NoProductYet msg={"There Is No Products Now..."}/>}
      </Row>
  </section> 
  )
}; 
export default ProductContainer;
