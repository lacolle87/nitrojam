import {HashLink as Link} from 'react-router-hash-link'
import {Container, Row, Col} from 'reactstrap'
import {motion} from 'framer-motion'
import {animationVariants} from '../../constants/animationList'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation';
import {Autoplay, Navigation, Scrollbar} from 'swiper/modules'
import music_svedenie from '../../assets/images/landingpage/svedenie.jpg'
import mastering from '../../assets/images/landingpage/mastering.jpg'
import record from '../../assets/images/landingpage/record.jpg'
import slide1 from '../../assets/images/landingpage/slider_photos/slide1.jpg'
import slide2 from '../../assets/images/landingpage/slider_photos/slide2.jpg'
import slide3 from '../../assets/images/landingpage/slider_photos/slide3.jpg'
import slide4 from '../../assets/images/landingpage/slider_photos/slide4.jpg'
import slide5 from '../../assets/images/landingpage/slider_photos/slide5.jpg'
import slide6 from '../../assets/images/landingpage/slider_photos/slide6.jpg'
import slide7 from '../../assets/images/landingpage/slider_photos/slide7.jpg'
import slide8 from '../../assets/images/landingpage/slider_photos/slide8.jpg'
import slide9 from '../../assets/images/landingpage/slider_photos/slide9.jpg'
import slide10 from '../../assets/images/landingpage/slider_photos/slide10.jpg'
import slide11 from '../../assets/images/landingpage/slider_photos/slide11.jpg'
import slide12 from '../../assets/images/landingpage/slider_photos/slide12.jpg'
import slide13 from '../../assets/images/landingpage/slider_photos/slide13.jpg'

export function MusicBlock() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
                  <img src={music_svedenie} alt="" />
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
                  <img src={record} alt="" />
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
                    <h2 className="text-warning">1200 рублей</h2>
                    <p className="text-xl">1 час записи</p>
                  </div>
                  <div className="d-flex flex-column justify-content-lg-center align-items-start">
                    <h2 className="text-warning">11000 рублей</h2>
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

      <Container>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          scrollbar={{
            hide: true,
          }}
          modules={[Autoplay, Scrollbar, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide13} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}
