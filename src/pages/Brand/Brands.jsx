import React from 'react'
import { Container, Row } from 'react-bootstrap'
import brandImg1 from "../../assets/image/product/thumb-01.jpg";
import brandImg2 from "../../assets/image/product/thumb-02.jpg";
import brandImg3 from "../../assets/image/product/thumb-03.jpg";
import brandImg4 from "../../assets/image/product/thumb-04.jpg";
import brandImg5 from "../../assets/image/product/thumb-01.jpg";
import brandImg6 from "../../assets/image/product/thumb-02.jpg";
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import BrandsCard from '../../components/Brands/BrandsCard/BrandsCard'
const BrandsPage = () => {
  return (
    <section>
      <Container className='my-5'>
        <h4>أشهر الماركات</h4>
        <Row className='justify-content-evenly'>
            <BrandsCard img={brandImg1}/>
            <BrandsCard img={brandImg2}/>
            <BrandsCard img={brandImg3}/>
            <BrandsCard img={brandImg4}/>
            <BrandsCard img={brandImg5}/>
            <BrandsCard img={brandImg6}/>
            <BrandsCard img={brandImg3}/>
            <BrandsCard img={brandImg2}/>
            <BrandsCard img={brandImg6}/>
            <BrandsCard img={brandImg4}/>
            <BrandsCard img={brandImg1}/>
            <BrandsCard img={brandImg6}/>
            <BrandsCard img={brandImg3}/>
            <BrandsCard img={brandImg5}/>
            <BrandsCard img={brandImg2}/>
            <BrandsCard img={brandImg6}/>
        </Row>
        <PaginationComp/>
      </Container>
    </section>
  )
}

export default BrandsPage

