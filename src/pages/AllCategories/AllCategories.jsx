import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import GrowExample from '../../components/Utilities/Spinner/Spinner'
import AllCategoriesPageHook from '../../CustomHooks/CtegoryHooks/AllCategoriesPageHook';
import CategoryContainer from '../../components/Home/CategoryContainer/CategoryContainer';
const AllCategories = () => {
  let [CategoryData,PaginationData,Loading,getPageCount]=AllCategoriesPageHook();  
  if(Loading==true){
    return(<GrowExample/>)
  }else{
    return (  
      <section className="pageStyle">
        <Container className='py-5'>
        {CategoryData?(<CategoryContainer CategoryData={CategoryData} title={"التصنيفات"}/>):<GrowExample/>}
          {/* <SubTitle title="كل التصنيفات"/>
          <Row className='justify-content-evenly'>
            {CategoryData?(
              CategoryData.map((item,index)=><CategoryCard  key={index} img={item.image} category={item.name} background={backgroundColor[Math.floor(Math.random()*6)/1]}/>)
            ):null}
          </Row> */}
          {PaginationData>1?(<PaginationComp PaginationData={PaginationData} getPageCount={getPageCount}/>):null}
        </Container>
      </section>
    )
  }
};
export default AllCategories
