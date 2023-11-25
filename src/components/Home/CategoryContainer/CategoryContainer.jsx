import React from 'react'
import SubTitle from '../../Utilities/SubTitle/SubTitle'
import {Row} from 'react-bootstrap';
import Spinner from '../../Utilities/Spinner/Spinner';
import Brand_Category_Card from '../../Category/Brand_Category_Card/Brand_Category_Card';
const CategoryContainer = ({CategoryData,title,btnName,pathName}) => {
  return (
    <section className='mt-5 mb-4'> 
        <SubTitle title={title} btnName={btnName} pathName={pathName}/>
        <Row className="justify-content-between">
          {CategoryData?(
            CategoryData.map((item,index)=>
              <Brand_Category_Card key={index} item={item}/>
            )
          ):<Spinner/>}
        </Row>
    </section>
  )
}; 
export default CategoryContainer;
