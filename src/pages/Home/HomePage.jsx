import Slider from '../../components/Home/Slider/Slider'
import BrandsContainer from '../../components/Home/BrandsContainer/BrandsContainer'
import CategoryContainer from '../../components/Home/CategoryContainer/CategoryContainer'
import DescountComp from '../../components/Home/DescountComponent/DescountComp'
import { Container } from 'react-bootstrap'
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import HomePageHook from '../../CustomHooks/HomePage/HomePageHook';
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer'
const HomePage = () => {
  let [CategoryData,HomeProductData,BrandData]=HomePageHook()
  return (
    <section className="pageStyle">
      <Slider/>
      <Container> 
        {CategoryData?(<CategoryContainer CategoryData={CategoryData} title={"Shop By Category"} btnName={"More"} pathName={"/allcategories"}/>):<GrowExample/>}
        {HomeProductData?(<ProductContainer ProductData={HomeProductData} title={"Best Seller"} btnName={"More"}  pathName={"/products"}/>):<GrowExample/>}  
        <DescountComp/>
        {HomeProductData?(<ProductContainer ProductData={HomeProductData} title={"Latest Products"} btnName={"More"}  pathName={"/products"}/>):<GrowExample/>}
        {BrandData?(<BrandsContainer BrandData={BrandData} title={"Shop By Brands"} btnName={"More"} pathName={"/brands"}/>):<GrowExample/>}
      </Container>
    </section>
  )
};
export default HomePage;  
