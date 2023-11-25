import React from 'react';
import ProductsSearchSubTitle from '../../components/Products/ProductsSearchSubTitle/ProductsSearchSubTitle';
import { Col, Container, Row } from 'react-bootstrap';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import SlideSearch from '../../components/Products/SlideProductsSearch/SlideProductsSearch';
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import ProductsSearchPageHook from '../../CustomHooks/ProductsHooks/ProductsSearchPageHook';
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer';
const ProductsSearchPage = () => {
  let [items,pagination,getPageCount,getProduct]=ProductsSearchPageHook();
    
  return (
    <section className='pageStyle py-3 mb-5'>
      <Container>
      <ProductsSearchSubTitle ProductData={items} getProduct={getProduct}/>
      <Row>
        <Col lg={2}>
          <SlideSearch getProduct={getProduct}/>
        </Col>
        <Col lg={10}>
         {items.data?(<ProductContainer  ProductData={items.data} title={""}/>):<GrowExample/>}
        </Col>
      </Row>
      {pagination>1?(<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>):null}
      </Container>  
    </section>
  )
};

export default ProductsSearchPage
