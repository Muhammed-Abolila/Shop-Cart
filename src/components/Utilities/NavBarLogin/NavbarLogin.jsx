import logo from "../../../assets/image/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgLogIn,CgShoppingCart} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import NavbarLoginHook from "../../../CustomHooks/NavbarLogin/NavbarLoginHook";
import { NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NavbarLogin = () => {
  let [searchWordStorage,onChangeSearchword]=NavbarLoginHook();
  let [userName,setUserName]=useState("");
  useEffect(()=>{
    if(localStorage.getItem("user")!=null){
      setUserName(JSON.parse(localStorage.getItem("user")));
    }
  },[])
  const logOut=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserName("");
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
            className="search form-control w-75 m-auto" 
            type="search" 
            placeholder="ابحث..."
            />
          <Nav className="ms-auto">
            {userName?(
              <>
              <NavDropdown title={`مرحبا ${userName.name}`} id="basic-nav-dropdown">
                <Link to="/user/profile">الصفحه الشخصيه</Link>
                <NavDropdown.Divider />
                <Link to="/login" onClick={logOut}>تسجيل الخروج</Link>
              </NavDropdown>


              <Link to="/cart">
                <CgShoppingCart />
                <p>العربه</p>
              </Link>
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