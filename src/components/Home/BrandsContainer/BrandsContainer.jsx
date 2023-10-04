import React from 'react'
import SubTitle from "../../Utilities/SubTitle/SubTitle"
import { Row, Col } from 'react-bootstrap'
import BrandsCard from '../../Brands/BrandsCard/BrandsCard'
import GrowExample from "../../Utilities/Spinner/Spinner"
const BrandsContainer = ({BrandData,title,btnName,pathName}) => {
  return (
    <section className='mt-5'>
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row className="justify-content-between">
          {BrandData?(
            BrandData.map((item,index)=>
              <Col 
                sm={4}
                xl={2}
                key={index}
                >
                  <BrandsCard item={item}/>
              </Col>
              )
            ):<GrowExample/>}
      </Row>
    </section>
  )
}; 
export default BrandsContainer;
