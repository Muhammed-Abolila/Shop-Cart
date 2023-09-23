import React from 'react';
import ProductsSearchNavbar from '../../components/Utilities/ProductsSearchNavBar/ProductsSearchNavbar';
import ProductsSearchSubTitle from '../../components/Products/ProductsSearchSubTitle/ProductsSearchSubTitle';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import SlideSearch from '../../components/Products/SlideProductsSearch/SlideProductsSearch';
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import ProductsSearchPageHook from '../../CustomHooks/ProductsHooks/ProductsSearchPageHook';
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer';
const ProductsSearchPage = () => {
  let [items,pagination,getPageCount,getProduct]=ProductsSearchPageHook();
    
  return (
    <section className='pageStyle'>
      <ProductsSearchNavbar/>
      <Container>
      <ProductsSearchSubTitle ProductData={items} getProduct={getProduct}/>
      <Row>
        <Col lg={2}>
          <SlideSearch getProduct={getProduct}/>
        </Col>
        <Col lg={10}>
         {items.data?(<ProductContainer  ProductData={items.data} title={""}/>):<GrowExample/>}
          {/* <Row className='justify-content-evenly'>
            {items.data?(
              items.data.map((product,index)=>{
                return(
                    <Col xs={10} sm={6} lg={4} key={index}>
                      <ProductCard CardProductData={product}/>
                    </Col>
                )}) 
            ):<GrowExample/>}
          </Row>*/}
        </Col>
      </Row>
      {pagination>1?(<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>):null}
      </Container>  
    </section>
  )
};

export default ProductsSearchPage
