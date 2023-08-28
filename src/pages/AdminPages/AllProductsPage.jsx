import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/AdminComp/SideBarComp/SideBar";
import AdminAllProducts from "../../components/AdminComp/AllProductsComp/AllProduct";
import thumb from "../../assets/image/item.png";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import SubTitle from "../../components/Utilities/SubTitle/SubTitle";
const AllProducts=()=>{
    return(
       <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <SideBar/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title="إداره جميع المنتجات"/>
                        <Row className="justify-content-center">
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                            <AdminAllProducts img={thumb}/>
                        </Row>
                    </Col>
                </Row>
                <PaginationComp/>
            </Container>
       </section>
    )
}
export default AllProducts;