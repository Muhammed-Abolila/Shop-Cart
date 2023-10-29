import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgLogIn} from 'react-icons/cg';
import {FaBars, FaOpencart} from 'react-icons/fa';
import NavbarLoginHook from "../../../CustomHooks/NavbarLogin/NavbarLoginHook";
import { NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs"
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
    <Navbar expand="lg">
      <Container>

        <Link to="/" className="navbar-brand">
            <FaOpencart/>
            <h1>FreshCart</h1>
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
            placeholder="Search for product..."
            />

          <Nav className="ms-auto">
            {user?(
              <>
              <NavDropdown title={`${user.name}`} id="basic-nav-dropdown">
                {user.role=="admin"?(
                <Link to="/admin/manageproduct">Dashboard</Link>
                ):(
                <Link to="/user/profile">Profile</Link>
                )}
                <NavDropdown.Divider />
                <Link to="/login" onClick={logOut}>Log Out</Link>
              </NavDropdown>
              {user.role==="user"?(
                <>
                <Link to="/user/favproduct">
                  <div className="cart-logo">
                      <BsFillHeartFill/>
                      <div className="count">{lengthOfArray||0}</div>
                  </div>
                </Link>
                <Link to="/cart">
                <div className="cart-logo">
                    <RiShoppingCart2Fill/>
                    <div className="count">{lengthOfArray||0}</div>
                </div>
              </Link>
              </>
              ):null}
              </>
            ):(
            <Link to="/login">
              <div className="login-icon">
                <CgLogIn />
                <div>Login</div>
              </div>
            </Link>
          )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarLogin;