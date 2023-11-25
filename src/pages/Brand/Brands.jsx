import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import AllBrandsPageHook from '../../CustomHooks/BrandsHooks/AllBrandsPageHook';
import BrandsContainer from '../../components/Home/BrandsContainer/BrandsContainer';
const BrandsPage = () => {
  let [AllBrandsData,Loading,Pagination,getPageCount]=AllBrandsPageHook()
  if(Loading===true){
    return(
      <GrowExample/>
    )
  }else{
    return(
      <section className="pageStyle py-3 mb-5">
        <Container className=''>
          {AllBrandsData?(<BrandsContainer BrandData={AllBrandsData} title={"All Brands"}/>):<GrowExample/>}
          {Pagination>1?(<PaginationComp PaginationData={Pagination} getPageCount={getPageCount}/>):null}
        </Container>
      </section>
    )
  }
  };  
export default BrandsPage;

