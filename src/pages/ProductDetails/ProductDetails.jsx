import React from 'react'
import ProductsSearchNavbar from '../../components/Utilities/ProductsSearchNavBar/ProductsSearchNavbar'
import { Container } from 'react-bootstrap'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'
import ItemDetail from '../../components/Products/ItemDetail/ItemDetail'
import RateAndComments from '../../components/Products/Rate&Comments/RateAndComments'

const ProductDetails = () => {
  return (
    <section className='product-details pb-5 pageStyle'>
        <ProductsSearchNavbar/>
        <Container>
            <ItemDetail/>
            <RateAndComments/>
            <ProductContainer title="منتجات قد تعجبك"/>
        </Container>
    </section>
  )
}

export default ProductDetails
