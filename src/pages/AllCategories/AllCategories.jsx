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
      <section className="pageStyle py-3 mb-5">
        <Container className=''>
        {CategoryData?(<CategoryContainer CategoryData={CategoryData} title={"All Categories"}/>):<GrowExample/>}
          {PaginationData>1?(<PaginationComp PaginationData={PaginationData} getPageCount={getPageCount}/>):null}
        </Container>
      </section>
    )
  }
};
export default AllCategories
