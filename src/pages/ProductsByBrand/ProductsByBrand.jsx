import { Container, Row, Col } from "react-bootstrap";
import ProductContainer from "../../components/Home/ProductContainer/ProductContainer";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import { useParams } from "react-router";
import ProductsByBrandHook from "../../CustomHooks/ProductsHooks/ProductsByBrandHook";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const ProductsByBrand = () => {
    let {id}=useParams();
    let [productBrandData,pagination,getPageCount]=ProductsByBrandHook(id); 
  return (
    <>
    {productBrandData?(
      <section className='pageStyle py-3 mb-5'>
      <Container>
      <Row>
        <Col lg={12}>
        <ProductContainer ProductData={productBrandData}/>
        </Col>
      </Row>
        {pagination>1?(<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>):null}
      </Container>  
    </section>
    ):(
      <Spinner/>
    )}
    </>
  )
};
export default ProductsByBrand;
