import React, { useState } from 'react'
import ProductsSearchNavbar from '../../components/Utilities/ProductsSearchNavBar/ProductsSearchNavbar'
import { Container } from 'react-bootstrap'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'
import ItemDetail from '../../components/Products/ItemDetail/ItemDetail'
import RateAndComments from '../../components/Products/Rate&Comments/RateAndComments'
import { useParams } from 'react-router';
import ProductDetailsHook from '../../CustomHooks/ProductsHooks/ProductDetailsHook';
const ProductDetails = () => {
  let {id}=useParams();
  let [oneProduct,oneCategory,oneBrand,SameProductData,reloadWhenChooseProduct]=ProductDetailsHook(id);
  return (
    <section className='product-details pb-5 pageStyle'>
        <ProductsSearchNavbar/>
        <Container>
            <ItemDetail oneProduct={oneProduct} oneCategory={oneCategory} oneBrand={oneBrand}/>
            <RateAndComments oneProductData={oneProduct}/>
            {SameProductData?(<ProductContainer ProductData={SameProductData} reloadWhenChooseSameProduct={reloadWhenChooseProduct} title="منتجات قد تعجبك"/>):null}
        </Container>
    </section>
  )
};
export default ProductDetails
