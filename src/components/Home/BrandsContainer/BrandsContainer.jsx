import React from 'react'
import SubTitle from "../../Utilities/SubTitle/SubTitle"
import { Row } from 'react-bootstrap'
import BrandsCard from '../../Brands/BrandsCard/BrandsCard'
import brandImg1 from "../../../assets/image/for back/brands/Acer_Logo.svg.png";
import brandImg2 from "../../../assets/image/for back/brands/dell.png";
import brandImg3 from "../../../assets/image/arcaya.jpg";
import brandImg4 from "../../../assets/image/derma roller.jpg";
import brandImg5 from "../../../assets/image/face mask.jpg";
import brandImg6 from "../../../assets/image/glutathione.jpg";
const BrandsContainer = ({title,btnName,pathName}) => {
  return (
    <section className='mt-5'>
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
};
export default BrandsContainer
