import React from 'react'
import SubTitle from "../../Utilities/SubTitle/SubTitle"
import { Row } from 'react-bootstrap';
import Brand_Category_Card from '../../Category/Brand_Category_Card/Brand_Category_Card';
import Spinner from '../../Utilities/Spinner/Spinner';
const BrandsContainer = ({BrandData,title,btnName,pathName}) => {
  return (
    <section className='mb-5 mt-4'> 
        <SubTitle title={title} btnName={btnName} pathName={pathName}/>
        <Row className="justify-content-between">
          {BrandData?(
            BrandData.map((item,index)=>
              <Brand_Category_Card key={index} item={item}/>
            )
          ):<Spinner/>}
        </Row>
    </section>
  )
}; 
export default BrandsContainer;
