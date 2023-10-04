import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import BrandsCard from '../../components/Brands/BrandsCard/BrandsCard';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
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
      <section className="pageStyle">
        <Container className='py-5'>
          {AllBrandsData?(<BrandsContainer BrandData={AllBrandsData} title={"أشهر الماركات"}/>):<GrowExample/>}
          {Pagination>1?(<PaginationComp PaginationData={Pagination} getPageCount={getPageCount}/>):null}
        </Container>
      </section>
    )
  }
  };  
export default BrandsPage;

