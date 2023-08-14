import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/AdminComp/SideBarComp/SideBar";
import AdminAllProducts from "../../components/AdminComp/AllProductsComp/AllProduct";
import img1 from "../../assets/image/product/product-01.jpg";
import img2 from "../../assets/image/product/product-02.jpg";
import img3 from "../../assets/image/product/product-03.jpg";
import img4 from "../../assets/image/product/product-04.jpg";
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
                            <AdminAllProducts img={img1}/>
                            <AdminAllProducts img={img2}/>
                            <AdminAllProducts img={img3}/>
                            <AdminAllProducts img={img4}/>
                            <AdminAllProducts img={img1}/>
                            <AdminAllProducts img={img2}/>
                            <AdminAllProducts img={img3}/>
                            <AdminAllProducts img={img4}/>
                        </Row>
                    </Col>
                </Row>
                <PaginationComp/>
            </Container>
       </section>
    )
}
export default AllProducts;