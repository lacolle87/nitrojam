import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { animationVariants } from '../../constants/animationList';

interface PageBannerProps {
  title: string;
  background: string;
}

function PageBanner({ title, background }: PageBannerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="static-slider-head-page"
      style={{ backgroundImage: `url(${background})`, padding: `100px 0`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="static-head-bg"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" className="align-self-center text-center">
            <motion.h1 variants={animationVariants.fadeLeft} className="title">
              {title}
            </motion.h1>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default PageBanner