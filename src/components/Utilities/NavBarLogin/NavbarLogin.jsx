import logo from "../../../assets/image/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgLogIn,CgShoppingCart} from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
const NavbarLogin = () => {
  return (
    <Navbar expand="lg p-0">
      <Container>
        <Navbar.Brand href="/" >
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars className='navbar-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <input className="search form-control w-75 m-auto" type="search" placeholder="ابحث..."/>
          <Nav className="ms-auto">
            <Nav.Link href="/login">
              <CgLogIn />
              <p>الدخول</p>
            </Nav.Link>
            <Nav.Link href="/cart">
              <CgShoppingCart />
              <p>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarLogin;