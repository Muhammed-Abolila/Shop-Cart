import React from 'react'
import NavbarLogin from '../../components/Utilities/NavBarLogin/NavbarLogin'
import Slider from '../../components/Home/Slider/Slider'
import HomeCategory from '../../components/Home/Category/HomeCategory'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'

const HomePage = () => {
  return (
    <div>
      <NavbarLogin/>
      <Slider/>
      <HomeCategory/>
      <ProductContainer title={"الأكثر مبيعا"} btnName={"المزيد"}/>
      <ProductContainer title={"أحدث الأزياء"} btnName={"المزيد"}/>
    </div>
  )
}

export default HomePage
