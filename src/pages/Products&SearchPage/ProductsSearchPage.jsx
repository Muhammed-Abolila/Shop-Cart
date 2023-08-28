import React from 'react';
import ProductsSearchNavbar from '../../components/Utilities/ProductsSearchNavBar/ProductsSearchNavbar';
import ProductsSearchSubTitle from '../../components/Products/ProductsSearchSubTitle/ProductsSearchSubTitle';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import thumb from "../../assets/image/item.png";
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import SlideSearch from '../../components/Products/SlideProductsSearch/SlideProductsSearch';
const ProductsSearchPage = () => {
  return (
    <section className='pageStyle'>
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
              <ProductCard img={thumb}/>
            </Col>
            <Col  xs={10} sm={6} lg={4}>
              <ProductCard img={thumb}/>
            </Col>
            <Col  xs={10} sm={6} lg={4}>
              <ProductCard img={thumb}/>
            </Col>
            <Col  xs={10} sm={6} lg={4}>
              <ProductCard img={thumb}/>
            </Col>
            <Col  xs={10} sm={6} lg={4}>
              <ProductCard img={thumb}/>
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
