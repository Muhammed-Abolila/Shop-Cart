import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Utilities/Footer/Footer";
import NavbarLogin from "./components/Utilities/NavBarLogin/NavbarLogin";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AllCategories from "./pages/AllCategories/AllCategories";
import Cart from "./pages/Cart/Cart";
import BrandsPage from "./pages/Brand/Brands";
import ProductsSearchPage from "./pages/Products&SearchPage/ProductsSearchPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function App() {
  return (
    <>
      <NavbarLogin/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/allcategories" element={<AllCategories/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/brands" element={<BrandsPage/>}/>
          <Route path="/products" element={<ProductsSearchPage/>}/>
          <Route path="/details/:id" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
