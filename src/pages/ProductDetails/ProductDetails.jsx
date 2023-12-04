import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'
import ItemDetail from '../../components/Products/ItemDetail/ItemDetail'
import RateAndComments from '../../components/Products/Rate&Comments/RateAndComments'
import { useParams } from 'react-router';
import ProductDetailsHook from '../../CustomHooks/ProductsHooks/ProductDetailsHook';
const ProductDetails = () => {
  let {id}=useParams();
  let [oneProduct,oneCategory,oneBrand,SameProductData]=ProductDetailsHook(id);
  return (
    <section className='product-details pb-5 pageStyle'>
        <Container>
          {oneProduct&&oneCategory&&oneBrand?(<ItemDetail oneProduct={oneProduct} oneCategory={oneCategory} oneBrand={oneBrand}/>):null}
            <RateAndComments oneProductData={oneProduct}/>
            <div className="mt-3">
                {SameProductData?(<ProductContainer ProductData={SameProductData} title="Products You May Like :-"/>):null}
            </div>
        </Container>
    </section>
  )
};
export default ProductDetails
