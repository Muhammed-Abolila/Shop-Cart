import React from 'react'
import CategoryCard from '../../Category/CategoryCard/CategoryCard'
import SubTitle from '../../Utilities/SubTitle/SubTitle'
import {Row} from 'react-bootstrap';
import CategoryContainerHook from '../../../CustomHooks/CtegoryHooks/CategoryContainerHook';
const CategoryContainer = ({title,btnName,pathName}) => {
  let [CategoryData,backgroundColor]=CategoryContainerHook()
  return (
    <section className='mt-5'> 
        <SubTitle title={title} btnName={btnName} pathName={pathName}/>
        <Row>
          {CategoryData.data?(
            CategoryData.data.slice(0,6).map((item,index)=>
              <CategoryCard key={index} img={item.image} category={item.name} background={backgroundColor[index]}/>
            )
          ):null}
        </Row>
    </section>
  )
};
export default CategoryContainer;
