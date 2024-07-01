import React, { useEffect, Suspense } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/animationList'

import useImage from '../../services/useImage'

const Slider = React.lazy(() => import('../../components/Slider/Slider'));

export function MusicBlock() {
  const mixing = useImage('main', 'mixing.avif')
  const mastering = useImage('main', 'mastering.avif')
  const recording = useImage('main', 'record.avif')
  const slideImages = [
    useImage('slider_photos', 'slide1.avif'),
    useImage('slider_photos', 'slide2.avif'),
    useImage('slider_photos', 'slide3.avif'),
    useImage('slider_photos', 'slide4.avif'),
    useImage('slider_photos', 'slide5.avif'),
    useImage('slider_photos', 'slide6.avif'),
    useImage('slider_photos', 'slide7.avif'),
    useImage('slider_photos', 'slide8.avif'),
    useImage('slider_photos', 'slide9.avif'),
    useImage('slider_photos', 'slide10.avif'),
    useImage('slider_photos', 'slide11.avif'),
    useImage('slider_photos', 'slide12.avif'),
    useImage('slider_photos', 'slide13.avif'),
  ];

  const bgOverlay = useImage('main', 'bg-overlay.avif')

  useEffect(() => {
    if (bgOverlay) {
      document.documentElement.style.setProperty('--background-parallax', `url(${bgOverlay})`);
    }
  }, [bgOverlay]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  };

  return (
    <div className="music-block-head">
      <Container>
        <motion.div
          variants={animationVariants.fadeUp}
          viewport={{once: true, amount: 0.2}}
          className="anim"
        >
          <Row className="justify-content-center" id='price'>
            <Col xl="4" lg="6" md="12">
              <div className="music-block-main mt-3">
                <Link to="/services#mixing">
                  <img src={mixing} alt="" />
                  <div className="music-block-content" data-toggle="collapse">
                    <p className="music-block-text">
                      Сведение
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col xl="4" lg="6" md="12">
              <div className="music-block-main mt-3">
                <Link to="/services#recording">
                  <img src={mastering} alt="" />
                  <div className="music-block-content">
                    <p className="music-block-text">
                      Запись
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col xl="4" lg="6" md="12">
              <div className="music-block-main mt-3">
                <Link to="/services#mastering">
                  <img src={recording} alt="" />
                  <div className="music-block-content">
                    <p className="music-block-text">
                      Мастеринг
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </motion.div>
        <div className="row g-4 p-xl-5 p-lg-3 p-md-0 pt-5">
          <div className="col-xl-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{once: true, amount: 0.2}}
              transition={{staggerChildren: 0.1}}
              className=""
            >
              <motion.h1
                variants={animationVariants.fadeLeft}
                className=""
              >
                Чтобы сделать по-настоящему качественную запись, необходимо
                вложить в нее свою душу!
              </motion.h1>
              <motion.p
                variants={animationVariants.fadeLeft}
                className=""
              >
                Мы хотим, чтобы ничто не отвлекало вас от процесса создания
                музыкальных шедевров: ни городская суета, ни назойливые
                телефонные звонки, ни временные рамки. Таким образом, советуем
                бронировать день записи целиком. Тем более это дешевле!
              </motion.p>
              <div className="d-flex justify-content-between">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{once: true, amount: 0.2}}
                  transition={{staggerChildren: 0.1}}
                  variants={animationVariants.fadeLeft}
                  className="left-side"
                >
                  <div className="d-flex flex-column justify-content-lg-center align-items-start">
                    <h2 className="text-warning">1300 рублей</h2>
                    <p className="text-xl">1 час записи</p>
                  </div>
                  <div className="d-flex flex-column justify-content-lg-center align-items-start">
                    <h2 className="text-warning">12000 рублей</h2>
                    <p className="text-xl">День записи (с 11:00 до 22:00)</p>
                  </div>
                </motion.div>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{once: true, amount: 0.2}}
                  transition={{staggerChildren: 0.1}}
                  variants={animationVariants.fadeRight}
                  className="left-side"
                >
                  <div className="d-flex flex-column justify-content-lg-center align-items-end">
                    <h2 className="text-warning">от 6000 рублей</h2>
                    <p className="text-xl">сведение одного трека</p>
                  </div>
                  <div className="d-flex flex-column justify-content-lg-center align-items-end">
                    <h2 className="text-warning">от 2000 рублей</h2>
                    <p className="text-xl">
                      Редактирование одного трека (барабаны, голос)
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{once: true, amount: 0.2}}
                transition={{staggerChildren: 0.1}}
                variants={animationVariants.fadeLeft}
                className="left-side"
              >
                <div className="d-flex flex-column justify-content-lg-center align-items-start">
                  <h2 className="text-warning">2000 рублей за трек</h2>
                  <p className="text-xl">Мастеринг</p>
                </div>
              </motion.div>
              <motion.div variants={animationVariants.fadeRight}>
                <Link className="link-contact" to={'/contact'} onClick={scrollToTop}>
                  Забронировать
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
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
      <Container className="swiperContainer">
        <Suspense fallback={<div>Loading...</div>}>
        <Slider slides={slideImages} />
        </Suspense>
      </Container>
    </div>
  )
}

export default MusicBlock
