import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
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
import AdminAllOrdersPage from "./pages/AdminPages/AdminAllOrdersPage";
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
import EdditProductPage from "./pages/AdminPages/EdditProductPage";
import AdminManageProductPage from "./pages/AdminPages/AdminManageProductsPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword/ForgotPasswordPage";
import VerifyCodePage from "./pages/Auth/VerifyCode/VerifyCodePage";
import RePasswordPage from "./pages/Auth/RePassword/RePasswordPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddCouponPage from "./pages/AdminPages/AddCouponPage";
import AdminOrderDetails from "./pages/AdminPages/AdminOrderDetails";
import ProtectedRouteComp from "./components/Utilities/ProtectedRouteComp/ProtectedRouteComp";
import ProtectedRoute from "./CustomHooks/Auth/ProtectedRoute";
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";
import ProductsByBrand from "./pages/ProductsByBrand/ProductsByBrand";
function App() {
  let [isUser,isAdmin]=ProtectedRoute()
  return (
    <>
      <HashRouter>
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
          <Route path="/brands" element={<BrandsPage/>}/>
          <Route path="/products" element={<ProductsSearchPage/>}/>
          <Route path="/details/:id" element={<ProductDetails/>} />
          <Route path="/products/category/:id" element={<ProductsByCategory/>} />
          <Route path="/products/brand/:id" element={<ProductsByBrand/>} />

          <Route element={<ProtectedRouteComp auth={isAdmin}/>}>
            <Route path="/admin/orders" element={<AdminAllOrdersPage/>} />
            <Route path="/admin/manageproduct" element={<AdminManageProductPage/>} />
            <Route path="/admin/addbrand" element={<AddBrandPage/>} />
            <Route path="/admin/addcategory" element={<AddCategoryPage/>} />
            <Route path="/admin/addsubcategory" element={<AddSubCategoryPage/>} />
            <Route path="/admin/addproduct" element={<AddProductPage/>} />
            <Route path="/admin/addcoupon" element={<AddCouponPage/>} />
            <Route path="/admin/eddit-product/:id" element={<EdditProductPage/>} />
            <Route path="/admin/order-details/:id" element={<AdminOrderDetails/>} />
            
          </Route>
          <Route element={<ProtectedRouteComp auth={isUser}/>}>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/paymethods" element={<PaymentMethodPage/>} />
            <Route path="/user/allorders" element={<UserAllOrdersPage/>} />
            <Route path="/user/favproduct" element={<UserFavProductPage/>} />
            <Route path="/user/address" element={<UserAddressPage/>} />
            <Route path="/user/profile" element={<UserProfilePage/>} />
            <Route path="/user/eddit-address/:id" element={<UserEdditAddressPage/>} />
            <Route path="/user/add-address" element={<UserAddAddressPage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        </HashRouter>
        <Footer/>
    </>
  );
}

export default App;