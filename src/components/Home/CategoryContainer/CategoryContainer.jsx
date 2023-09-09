import React from 'react'
import CategoryCard from '../../Category/CategoryCard/CategoryCard'
import SubTitle from '../../Utilities/SubTitle/SubTitle'
import {Row} from 'react-bootstrap';
import GrowExample from '../../Utilities/Spinner/Spinner';
const CategoryContainer = ({CategoryData,backgroundColor,title,btnName,pathName}) => {
  return (
    <section className='mt-5'> 
        <SubTitle title={title} btnName={btnName} pathName={pathName}/>
        <Row className="justify-content-between">
          {CategoryData.data?(
            CategoryData.data.slice(0,5).map((item,index)=>
              <CategoryCard key={index} img={item.image} category={item.name} background={backgroundColor[index]}/>
            )
          ):<GrowExample/>}
        </Row>
    </section>
  )
}; 
export default CategoryContainer;
