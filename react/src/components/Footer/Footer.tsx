import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Tooltip } from '@chakra-ui/react'

const Footer = React.memo (function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Часы работы</h5>
            <p>С 11:00 до 23:00</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <a href="mailto:record@nitrojam.ru" className="link">
              record@nitrojam.ru
            </a>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Социальные сети</h5>
            <div className="round-social light">
              <a href="https://t.me/BorisBungalow" className="link">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="https://vk.ru/nitrojam" className="link">
                <i className="fa fa-vk"></i>
              </a>
              <a href="mailto:record@nitrojam.ru" className="link">
                <i className="fa fa-envelope"></i>
              </a>
              <Tooltip
                hasArrow
                label="Meta - запрещенная организация в РФ."
                bg='yellow.300'
                color='white'
                borderRadius="5px"
              >
                <a
                  href="https://www.instagram.com/boristhenitrojam/"
                  className="link"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </Tooltip>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14 justify-content-between">
                <div className="m-t-10 m-b-10 copyright">
                  &copy; {currentYear} Профессиональная студия звукозаписи Nitrojam REC | Powered by Nitrojam REC
                </div>
              </div>
              <div className="links ms-auto m-t-10 m-b-10">
                <a href="/Privacy" className="p-10 p-l-0 text-warning">
                  Политика конфиденциальности
                </a>
                <a href="/Contact" className="p-10 text-warning">
                  Контакты
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
)

export default Footer
