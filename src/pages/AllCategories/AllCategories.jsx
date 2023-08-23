import React from 'react';
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../../components/Category/CategoryCard/CategoryCard'
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import GrowExample from '../../components/Utilities/Spinner/Spinner'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import AllCategoriesPageHook from '../../CustomHooks/CtegoryHooks/AllCategoriesPageHook';
const AllCategories = () => {
  let [CategoryData,Pagination,Loading,getPageCount,backgroundColor]=AllCategoriesPageHook()
  if(Loading==true){
    return(<GrowExample/>)
  }else{
    return (
      <section>
        <Container className='my-5'>
          <SubTitle title="كل التصنيفات"/>
          <Row className='justify-content-evenly'>
            {CategoryData?(
              CategoryData.map((item,index)=><CategoryCard  key={index} img={item.image} category={item.name} background={backgroundColor[Math.floor(Math.random()*6)/1]}/>)
            ):null}
          </Row>
          <PaginationComp PaginationData={Pagination} getPageCount={getPageCount}/>
        </Container>
      </section>
    )
  }
}
export default AllCategories
