import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../../components/Category/CategoryCard/CategoryCard'
import img1 from "../../assets/image/product/product-01.jpg"
import img2 from "../../assets/image/product/product-02.jpg"
import img3 from "../../assets/image/product/product-03.jpg"
import img4 from "../../assets/image/product/product-04.jpg"
import img5 from "../../assets/image/product/product-05.jpg"
import img6 from "../../assets/image/product/product-06.jpg"
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
const AllCategories = () => {
  return (
    <section>
      <Container className='my-5'>
        <h4>كل التصنيفات</h4>
        <Row className='justify-content-evenly'>
            <CategoryCard img={img1} category={"أجهزه كهربائيه"}/>
            <CategoryCard img={img2} category={"موبايلات"}/>
            <CategoryCard img={img3} category={"ملابس"}/>
            <CategoryCard img={img4} category={"العنايه بالبشره"}/>
            <CategoryCard img={img5} category={"إكسسوارات"}/>
            <CategoryCard img={img6} category={"كتب"}/>
            <CategoryCard img={img3} category={"ملابس"}/>
            <CategoryCard img={img2} category={"موبايلات"}/>
            <CategoryCard img={img6} category={"كتب"}/>
            <CategoryCard img={img4} category={"العنايه بالبشره"}/>
            <CategoryCard img={img1} category={"أجهزه كهربائيه"}/>
            <CategoryCard img={img6} category={"كتب"}/>
            <CategoryCard img={img3} category={"ملابس"}/>
            <CategoryCard img={img5} category={"إكسسوارات"}/>
            <CategoryCard img={img2} category={"موبايلات"}/>
            <CategoryCard img={img6} category={"كتب"}/>
        </Row>
        <PaginationComp/>
      </Container>
    </section>
  )
}

export default AllCategories
