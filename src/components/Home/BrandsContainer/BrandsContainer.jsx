import React from 'react'
import SubTitle from "../../Utilities/SubTitle/SubTitle"
import { Row } from 'react-bootstrap'
import BrandsCard from '../../Brands/BrandsCard/BrandsCard'
import brandImg1 from "../../../assets/image/product/thumb-01.jpg";
import brandImg2 from "../../../assets/image/product/thumb-02.jpg";
import brandImg3 from "../../../assets/image/product/thumb-03.jpg";
import brandImg4 from "../../../assets/image/product/thumb-04.jpg";
import brandImg5 from "../../../assets/image/product/thumb-01.jpg";
import brandImg6 from "../../../assets/image/product/thumb-02.jpg";
const BrandsContainer = ({title,btnName,pathName}) => {
  return (
    <section>
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row>
        <BrandsCard img={brandImg1}/>
        <BrandsCard img={brandImg2}/>
        <BrandsCard img={brandImg3}/>
        <BrandsCard img={brandImg4}/>
        <BrandsCard img={brandImg5}/>
        <BrandsCard img={brandImg6}/>
      </Row>
    </section>
  )
}

export default BrandsContainer
