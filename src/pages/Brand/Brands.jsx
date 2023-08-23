import React from 'react'
import { Container, Row } from 'react-bootstrap'
import brandImg1 from "../../assets/image/c serum.jpg";
import brandImg2 from "../../assets/image/collagen powder.jpg";
import brandImg3 from "../../assets/image/arcaya.jpg";
import brandImg4 from "../../assets/image/derma roller.jpg";
import brandImg5 from "../../assets/image/face mask.jpg";
import brandImg6 from "../../assets/image/glutathione.jpg";
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import BrandsCard from '../../components/Brands/BrandsCard/BrandsCard'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
const BrandsPage = () => {
  return (
    <section>
      <Container className='my-5'>
        <SubTitle title="أشهر الماركات"/>
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

