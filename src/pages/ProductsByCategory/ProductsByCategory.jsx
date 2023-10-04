import { Container, Row, Col } from "react-bootstrap";
import ProductContainer from "../../components/Home/ProductContainer/ProductContainer";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import { useParams } from "react-router";
import NoProductYet from "../../components/Utilities/NoProductYet/NoProductYet";
import ProductsByCatHook from "../../CustomHooks/ProductsHooks/ProductsByCatHook";
const ProductsByCategory = () => {
    let {id}=useParams()
    let [itemData,pagination,getPageCount]=ProductsByCatHook(id)
  return (
    <section className='pageStyle'>
      <Container>
      <Row>
        <Col lg={12}>
         {itemData.length>0?(<ProductContainer  ProductData={itemData}/>):<NoProductYet msg={"لاتوجد منتجات في هذا التصنيف حاليا..."}/>}
        </Col>
      </Row>
      {pagination>1?(<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>):null}
      </Container>  
    </section>
  )
}

export default ProductsByCategory
