import React from 'react'
import Slider from '../../components/Home/Slider/Slider'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'
import BrandsContainer from '../../components/Home/BrandsContainer/BrandsContainer'
import CategoryContainer from '../../components/Home/CategoryContainer/CategoryContainer'
import DescountComp from '../../components/Home/DescountComponent/DescountComp'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  return (
    <section>
      <Slider/>
      <Container>
        <CategoryContainer title={"التصنيفات"} btnName={"المزيد"} pathName={"/allcategories"}/>
        <ProductContainer title={"الأكثر مبيعا"} btnName={"المزيد"}  pathName={"/products"}/>
        <DescountComp/>
        <ProductContainer title={"أحدث الأزياء"} btnName={"المزيد"}  pathName={"/products"}/>
        <BrandsContainer title={"أشهر الماركات"} btnName={"المزيد"} pathName={"/brands"}/>
      </Container>
    </section>
  )
}

export default HomePage
