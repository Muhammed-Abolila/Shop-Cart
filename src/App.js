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
import PaymentMethodPage from "./pages/PaymentMethod/PaymentMethodPage";
import AllProducts from "./pages/AdminPages/AllProductsPage";
import OrdersPage from "./pages/AdminPages/OrdersPage";
import AddCategoryPage from "./pages/AdminPages/AddCategoryPage";
import AddBrandPage from "./pages/AdminPages/AddBrandPage";
import AddSubCategoryPage from "./pages/AdminPages/AddSubCategoryPage";
import AddProductPage from "./pages/AdminPages/AddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavProductPage from "./pages/User/UserFavProductPage";
import UserAddressPage from "./pages/User/UserAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import UserEdditAddressPage from "./pages/User/UserEdditAddressPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEdditProfilePage from "./pages/User/UserEdditProfilePage";
import EdditProductPage from "./pages/AdminPages/EdditProductPage";
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
          <Route path="/paymethods" element={<PaymentMethodPage/>} />
          <Route path="/admin/allproducts" element={<AllProducts/>} />
          <Route path="/admin/orders" element={<OrdersPage/>} />
          <Route path="/admin/addbrand" element={<AddBrandPage/>} />
          <Route path="/admin/addcategory" element={<AddCategoryPage/>} />
          <Route path="/admin/addsubcategory" element={<AddSubCategoryPage/>} />
          <Route path="/admin/addproduct" element={<AddProductPage/>} />
          <Route path="/user/allorders" element={<UserAllOrdersPage/>} />
          <Route path="/user/favproduct" element={<UserFavProductPage/>} />
          <Route path="/user/address" element={<UserAddressPage/>} />
          <Route path="/user/profile" element={<UserProfilePage/>} />
          <Route path="/user/eddit-address" element={<UserEdditAddressPage/>} />
          <Route path="/user/add-address" element={<UserAddAddressPage/>} />
          <Route path="/user/eddit-profile" element={<UserEdditProfilePage/>} />
          {/* <Route path="/admin/eddit-product/:id" element={<EdditProductPage/>} /> */}
          
          
        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;