import {Container} from 'reactstrap'
import {motion} from 'framer-motion'
import {animationVariants} from '../../constants/animationList'
import {HashLink as Link} from 'react-router-hash-link'

import scrollToTop from '../ScrollToTop/ScrollToTop'

export function Special() {

  return (
  <div className="special">
    <div className="special-main">
      <Container>
        <div className="special-content-main">
          <motion.h1
            initial="initial"
            whileInView="animate"
            viewport={{once: true, amount: 0.2}}
            transition={{staggerChildren: 0.1}}
            variants={animationVariants.fadeRight}
          >
            Специальные предложения
          </motion.h1>
          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{once: true, amount: 0.2}}
            transition={{staggerChildren: 0.1}}
            variants={animationVariants.fadeLeft}
          >
            Если у вас большой проект, пожалуйста пишите нам и мы обсудим
            как получить максимум исходя из вашего бюджета.
          </motion.p>
          <Link className="link-contact" to={'/contact'} onClick={scrollToTop}>
            Написать
          </Link>
        </div>
        <div className="line" id='photos'></div>
      </Container>
    </div>
  </div>
  )
}

export default Special