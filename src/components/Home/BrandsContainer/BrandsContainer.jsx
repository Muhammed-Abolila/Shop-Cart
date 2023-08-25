import React from 'react'
import SubTitle from "../../Utilities/SubTitle/SubTitle"
import { Row, Col } from 'react-bootstrap'
import BrandsCard from '../../Brands/BrandsCard/BrandsCard'
import BrandsContainerHook from '../../../CustomHooks/BrandsHooks/BrandsContainerHook';
const BrandsContainer = ({title,btnName,pathName}) => {
let [BrandData]=BrandsContainerHook()
  return (
    <section className='mt-5'>
      <SubTitle title={title} btnName={btnName} pathName={pathName}/>
      <Row className="justify-content-between">
          {BrandData?(
            BrandData.slice(0,5).map((item)=>
              <Col 
                sm={4}
                xl={2}
                >
                  <BrandsCard key={item._id} img={item.image}/>
              </Col>
              )
            ):null}
      </Row>
    </section>
  )
};
export default BrandsContainer;
