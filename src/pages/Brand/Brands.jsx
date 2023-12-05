import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import AllBrandsPageHook from '../../CustomHooks/BrandsHooks/AllBrandsPageHook';
import BrandsContainer from '../../components/Home/BrandsContainer/BrandsContainer';
import Spinner from '../../components/Utilities/Spinner/Spinner';
const BrandsPage = () => {
  let [AllBrandsData,Pagination,getPageCount]=AllBrandsPageHook();
    return(
      <>
      {AllBrandsData?(
        <section className="pageStyle py-3 mb-5">
        <Container className=''>
          <BrandsContainer BrandData={AllBrandsData} title={"All Brands"}/>
          {Pagination>1?(<PaginationComp PaginationData={Pagination} getPageCount={getPageCount}/>):null}
        </Container>
      </section>
      ):(<Spinner/>)}
      </>
    )
  };  
export default BrandsPage;

