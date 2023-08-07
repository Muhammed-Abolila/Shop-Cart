import React from 'react'
import CategoryCard from '../../Category/CategoryCard/CategoryCard'
import SubTitle from '../../Utilities/SubTitle/SubTitle'
import { Container, Row } from 'react-bootstrap'
import img1 from "../../../assets/image/product/product-01.jpg"
import img2 from "../../../assets/image/product/product-02.jpg"
import img3 from "../../../assets/image/product/product-03.jpg"
import img4 from "../../../assets/image/product/product-04.jpg"
import img5 from "../../../assets/image/product/product-05.jpg"
import img6 from "../../../assets/image/product/product-06.jpg"
const HomeCategory = () => {
  return (
    
    <section>
      
      <Container>
        <SubTitle title={"التصنيفات"} btnName={"المزيد"}/>
        <Row>
          <CategoryCard img={img1} category={"أجهزه كهربائيه"}/>
          <CategoryCard img={img2} category={"موبايلات"}/>
          <CategoryCard img={img3} category={"ملابس"}/>
          <CategoryCard img={img4} category={"العنايه بالبشره"}/>
          <CategoryCard img={img5} category={"إكسسوارات"}/>
          <CategoryCard img={img6} category={"كتب"}/>
        </Row>
      </Container>
      
    </section>

  )
}

export default HomeCategory
