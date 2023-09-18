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
import AdminManageProductPage from "./pages/AdminPages/AdminManageProductsPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword/ForgotPasswordPage";
import VerifyCodePage from "./pages/Auth/VerifyCode/VerifyCodePage";
import RePasswordPage from "./pages/Auth/RePassword/RePasswordPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
function App() {
  let tokenRole=''
  if(localStorage.getItem("user")!=null){
     tokenRole=JSON.parse(localStorage.getItem("user"));
  };
  return (
    <>
      <BrowserRouter>
      <NavbarLogin/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          <Route path="/verify" element={<VerifyCodePage/>} />
          <Route path="/re-password" element={<RePasswordPage/>} />
          <Route path="/allcategories" element={<AllCategories/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/brands" element={<BrandsPage/>}/>
          <Route path="/products" element={<ProductsSearchPage/>}/>
          <Route path="/details/:id" element={<ProductDetails/>} />
          <Route path="/paymethods" element={<PaymentMethodPage/>} />
          {tokenRole.role==="admin"?(
            <>
            <Route path="/admin/manageproduct" element={<AdminManageProductPage/>} />
            <Route path="/admin/orders" element={<OrdersPage/>} />
            <Route path="/admin/addbrand" element={<AddBrandPage/>} />
            <Route path="/admin/addcategory" element={<AddCategoryPage/>} />
            <Route path="/admin/addsubcategory" element={<AddSubCategoryPage/>} />
            <Route path="/admin/addproduct" element={<AddProductPage/>} />
            <Route path="/admin/eddit-product/:id" element={<EdditProductPage/>} />
            </>
          ):tokenRole.role==="user"?(
            <>
            <Route path="/user/allorders" element={<UserAllOrdersPage/>} />
            <Route path="/user/favproduct" element={<UserFavProductPage/>} />
            <Route path="/user/address" element={<UserAddressPage/>} />
            <Route path="/user/profile" element={<UserProfilePage/>} />
            <Route path="/user/eddit-address" element={<UserEdditAddressPage/>} />
            <Route path="/user/add-address" element={<UserAddAddressPage/>} />
            <Route path="/user/eddit-profile" element={<UserEdditProfilePage/>} />
            </>
          ):null}
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;