import logo from "../../../assets/image/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgLogIn} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import NavbarLoginHook from "../../../CustomHooks/NavbarLogin/NavbarLoginHook";
import { NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import CartPageHook from "../../../CustomHooks/CartHooks/CartPageHook";
const NavbarLogin = () => {
  let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook();
  let [searchWordStorage,onChangeSearchword]=NavbarLoginHook();
  let [user,setUser]=useState("");
  useEffect(()=>{
    if(localStorage.getItem("user")!=null){
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  },[])
  const logOut=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  }
  return (
    <Navbar expand="lg p-0">
      <Container>
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars className='navbar-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <input 
            value={searchWordStorage}
            onChange={onChangeSearchword}
            className="search form-control m-auto" 
            type="search" 
            placeholder="ابحث..."
            />
          <Nav className="ms-auto">
            {user?(
              <>
              <NavDropdown title={`مرحبا ${user.name}`} id="basic-nav-dropdown">
                {user.role=="admin"?(
                <Link to="/admin/manageproduct">لوحه التحكم</Link>
                ):(
                <Link to="/user/profile">الصفحه الشخصيه</Link>
                )}
                <NavDropdown.Divider />
                <Link to="/login" onClick={logOut}>تسجيل الخروج</Link>
              </NavDropdown>
              {user.role==="user"?(
                <Link to="/cart">
                  <div className="cart-logo">
                      <RiShoppingCart2Fill/>
                      <div className="count">{lengthOfArray}</div>
                  </div>
                </Link>
              ):null}
              </>
            ):(
            <Link to="/login">
            <CgLogIn />
            <p>الدخول</p>
          </Link>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarLogin;