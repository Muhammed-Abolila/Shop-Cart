import { Container, Row, Col } from "react-bootstrap";
import ProductContainer from "../../components/Home/ProductContainer/ProductContainer";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import { useParams } from "react-router";
import ProductsByCatHook from "../../CustomHooks/ProductsHooks/ProductsByCatHook";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const ProductsByCategory = () => {
    let {id}=useParams()
    let [itemData,pagination,getPageCount]=ProductsByCatHook(id);
  return (
    <>
    {itemData?(
      <section className='pageStyle py-3 mb-5'>
      <Container>
      <Row>
        <Col lg={12}>
         <ProductContainer ProductData={itemData}/>
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
}
export default ProductsByCategory;
