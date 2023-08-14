import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import ProductCard from '../../components/Products/ProductCard/ProductCard'
import img1 from "../../assets/image/product/product-01.jpg";
import img2 from "../../assets/image/product/product-02.jpg";
import img3 from "../../assets/image/product/product-03.jpg";
import img4 from "../../assets/image/product/product-04.jpg";
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
const UserFavProductPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title="المنتجات المفضله"/> 
                        <Row className="justify-content-center">
                            <Col xs={10} sm={6} lg={4}>
                                <ProductCard img={img1}/>
                            </Col>
                            <Col  xs={10} sm={6} lg={4}>
                                <ProductCard img={img2}/>
                            </Col>
                            <Col  xs={10} sm={6} lg={4}>
                                <ProductCard img={img3}/>
                            </Col>
                            <Col  xs={10} sm={6} lg={4}>
                                <ProductCard img={img4}/>
                            </Col>
                            <Col  xs={10} sm={6} lg={4}>
                                <ProductCard img={img4}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <PaginationComp/>
            </Container>
       </section>
  )
}
export default UserFavProductPage;
