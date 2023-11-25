import Container from 'react-bootstrap/Container';
import { CiLogin } from "react-icons/ci";
import {FaOpencart} from 'react-icons/fa';
import NavbarLoginHook from "../../../CustomHooks/NavbarLogin/NavbarLoginHook";
import { NavDropdown, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import CartPageHook from "../../../CustomHooks/CartHooks/CartPageHook";
import { BsGithub,BsLinkedin,BsWhatsapp,BsFillHeartFill } from 'react-icons/bs';
import { IoIosCloseCircleOutline} from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdAccountCircle,MdDashboard} from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import UserFavProductPageHook from '../../../CustomHooks/UserFavProductPage/UserFavProductPageHook';
import ProductsSearchPageHook from '../../../CustomHooks/ProductsHooks/ProductsSearchPageHook';
const NavbarLogin = () => {
  let [productsCartData,reload,setReload,lengthOfCartArray,productCartDataToCoupone]=CartPageHook();
  let [wishListProductData,lengthOfWishlistArray]=UserFavProductPageHook(); 
  let [items,pagination,getPageCount,getProduct]=ProductsSearchPageHook();
  let [searchWordStorage,onChangeSearchword,logOut,openSideBar,closeSideBar,user]=NavbarLoginHook(getProduct);

  return (
    <header className="header">
      <Container>
        <Row>
          <Col xs={{span:9}} sm={{span:5}} md={{span:4}} lg={{span:3}}>
            <div className="brand">
              <Link to="/" className="brand-name">
                <FaOpencart/>
                <h1>FreshCart</h1>
              </Link>
            </div>
          </Col>
          <Col xs={{span:2}} sm={{span:6}} md={{span:6}} lg={{span:6}}>
            <input 
              value={searchWordStorage}
              onChange={onChangeSearchword}
              className="search-input form-control m-auto" 
              type="search" 
              placeholder="Search for product..."
              />
              <div className="search-icon">
              <IoSearch />
              </div>
          </Col>
          <Col xs={{span:1}} sm={{span:1}}  md={{span:2}} lg={{span:3}} >
            <div className="nav">
              <div>
                {user?(
                  <>
                    <div className="nav-icon">
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
                            <div className="count">{lengthOfWishlistArray||0}</div>
                        </div>
                      </Link>
                      <Link to="/cart">
                      <div className="cart-logo">
                          <RiShoppingCart2Fill/>
                          <div className="count">{lengthOfCartArray||0}</div>
                      </div>
                    </Link>
                    </>
                    ):null}
                    </div>
                    <div className="open-sideBar">
                      <TiThMenuOutline onClick={openSideBar}/>
                    </div>
                    </>
                  ):(
                  <Link to="/login">
                    <div className="login-icon">
                      <CiLogin />
                      <div>Login</div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Start Side Bar */}
      <div className="sidebar" id="sidebar">
      <div className="sidebar-top">
        <Link to="/" className="brand-name">
            <FaOpencart/>
            <h1>FreshCart</h1>
        </Link>
        <span onClick={closeSideBar}>
            <IoIosCloseCircleOutline/>
        </span>
        
      </div>
      {user.role==="user"?(
        <ul className="sidebar-list">
          <li>
            <Link to="/cart">
              <RiShoppingCart2Fill/>
              <span>cart ({lengthOfCartArray||0})</span>
            </Link>
          </li>
          <li>
            <Link to="/user/favproduct">
              <BsFillHeartFill/>
              <span>wishlist ({lengthOfWishlistArray||0})</span>
            </Link>
          </li>
          <li>
            <Link to="/user/profile">
              <MdAccountCircle />
              <span>profile</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={logOut}>
              <CiLogout />
              <span>logout</span>
            </Link>
          </li>
        </ul>
      ):(
        <ul className="sidebar-list">
          <li>
            <Link to="/admin/manageproduct">
              <MdDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={logOut}>
              <CiLogout />
              <span>logout</span>
            </Link>
          </li>
        </ul>
      )}
      
      <div className="sidebar-footer">
            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
              <li>
                <a href="https://github.com/Muhammed-Abolila" target="_blank">
                  <BsGithub />
                </a>
              </li>
              <li className='px-4'>
                <a href="https://linkedin.com/in/mabolila638"  target="_blank">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://wa.me/01014391039"  target="_blank">
                  <BsWhatsapp/>
                </a>
              </li>
            </ul>
      </div>
    </div>
    {/* End Side Bar */}
    </header>
  )
};

export default NavbarLogin;