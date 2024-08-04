import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { animationVariants } from '../../constants/animationList';
import css from '../AboutUsBlock/AboutUsBlock.module.scss';
import { motion } from 'framer-motion'; // Ensure Framer Motion is installed

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div className={css.mainContainer}>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className={css.main}
      >
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} alt={`Slide ${index}`}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Slider;
