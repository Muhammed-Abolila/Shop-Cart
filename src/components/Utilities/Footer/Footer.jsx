import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BsGithub,BsLinkedin,BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <ul className='list-unstyled d-flex justify-content-start align-items-center m-0'>
              <li>الشروط والأحكام</li>
              <li className='px-2'>سياسه الخصوصيه</li>
              <li> اتصل بنا</li>
            </ul>
          </Col>
          <Col>
          <ul className='list-unstyled d-flex justify-content-end align-items-center m-0'>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
