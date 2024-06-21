import {Container, Row, Col} from 'reactstrap'
import {motion} from 'framer-motion'
import {animationVariants} from '../../constants/animationList'

export function PageBanner({title, background}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{once: true, amount: 0.2}}
      transition={{staggerChildren: 0.2}}
      className="static-slider-head"
      style={{backgroundImage: `url(${background})`, padding: `150px 0`}}
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
  )
}
