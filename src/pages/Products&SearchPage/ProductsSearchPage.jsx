import React from 'react';
import ProductsSearchNavbar from '../../components/Utilities/ProductsSearchNavBar/ProductsSearchNavbar';
import ProductsSearchSubTitle from '../../components/Products/ProductsSearchSubTitle/ProductsSearchSubTitle';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import img1 from "../../assets/image/product/product-01.jpg";
import img2 from "../../assets/image/product/product-02.jpg";
import img3 from "../../assets/image/product/product-03.jpg";
import img4 from "../../assets/image/product/product-04.jpg";
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import SlideSearch from '../../components/Products/SlideProductsSearch/SlideProductsSearch';
const ProductsSearchPage = () => {
  return (
    <section className='pb-5' style={{backgroundColor:"#dddddd5e"}}>
      <ProductsSearchNavbar/>
      <Container>
      <ProductsSearchSubTitle/>
      <Row>
        <Col lg={2}>
          <SlideSearch/>
        </Col>
        <Col lg={10}>
          <Row className='justify-content-evenly'>
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

export default ProductsSearchPage
