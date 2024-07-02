import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/animationList'
import UseImage from '../../services/UseImage'
import scrollToTop from '../ScrollToTop/ScrollToTop'


function HeaderBanner() {
  const bannerbg = UseImage('main', 'banner-bg.avif');

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="static-slider-head"
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <div className="static-head-bg"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" className="align-self-center text-center">
            <motion.h3 variants={animationVariants.fadeLeft} className="subtitle font-light">
              ПРОФЕССИОНАЛЬНАЯ СТУДИЯ ЗВУКОЗАПИСИ
            </motion.h3>
            <motion.h1 variants={animationVariants.fadeLeft} className="title">
              NITROJAM REC
            </motion.h1>
            <motion.h4 variants={animationVariants.fadeLeft} className="subtitle font-light">
              Мы предлагаем вырваться из городской суеты, забыть про весь окружающий шум, ради одной цели: полностью погрузиться в процесс рождения музыкальных шедевров.
            </motion.h4>
            <motion.div variants={animationVariants.fadeUp} className="w-100 banner-btns">
              <Link to="/#price" className="btn btn-md m-t-30 btn-warning-gradiant font-14">
                Цены
              </Link>
              <Link to="/about_us" onClick={scrollToTop} className="btn btn-md m-t-30 btn-outline-warning font-14">
                О нас
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default HeaderBanner
