import { Container, Row, Col } from "react-bootstrap";
import ProductContainer from "../../components/Home/ProductContainer/ProductContainer";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import { useParams } from "react-router";
import NoProductYet from "../../components/Utilities/NoProductYet/NoProductYet";
import ProductsByBrandHook from "../../CustomHooks/ProductsHooks/ProductsByBrandHook";
const ProductsByBrand = () => {
    let {id}=useParams();
    let [productBrandData,pagination,getPageCount]=ProductsByBrandHook(id); 
  return (
    <section className='pageStyle py-3 mb-5'>
      <Container>
      <Row>
        <Col lg={12}>
        {productBrandData.length>0?(<ProductContainer  ProductData={productBrandData}/>):(<NoProductYet msg={"There Is No Products Now..."}/>)}
        </Col>
      </Row>
        {pagination>1?(<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>):null}
      </Container>  
    </section>
  )
}

export default ProductsByBrand
