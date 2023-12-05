import { Col, Container, Row } from 'react-bootstrap';
import { BsGithub,BsLinkedin,BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={{span:3}} >
          <ul className='list-unstyled d-flex justify-content-start align-items-center m-0'>
              <li>
                <a href="https://github.com/Muhammed-Abolila" target="_blank">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mabolila638"  target="_blank">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+201014391039"  target="_blank">
                  <BsWhatsapp/>
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={{span:9}}  >
            <ul className='list-unstyled d-flex justify-content-end align-items-center m-0'>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
