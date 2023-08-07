import React from 'react';
import logo from "../../../assets/image/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faCartShopping  } from '@fortawesome/free-solid-svg-icons';
const NavbarLogin = () => {
  return (
    <Navbar expand="lg p-0">
      <Container>

        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon className='navbar-icon' icon={faBars} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <input className="search form-control w-75 m-auto" type="search" placeholder="ابحث..."/>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <p>الدخول</p>
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>
  )
}

export default NavbarLogin;