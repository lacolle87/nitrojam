import { Container } from 'reactstrap';
import { motion } from 'framer-motion';
import { animationVariants } from '../../constants/animationList';
import css from './ServicesBlock.module.scss';
import { Text } from '@chakra-ui/react';

import UseImage from '../../services/UseImage';
import ServiceCard from './ServiceCard';

function ServicesBlock() {
  const mixingImage = UseImage('main', 'mixing.avif');
  const recordingImage = UseImage('main', 'record.avif');
  const masteringImage = UseImage('main', 'mastering.avif');

  const services = [
    {
      title: "Сведение",
      id: "mixing",
      content: (
        <>
          Сведение одного трека: от{' '}
          <Text as="b" color="#ffb100">
            6000 рублей
          </Text>
          <br />
          Редактирование одного трека (барабаны, голос): от{' '}
          <Text as="b" color="#ffb100">
            2000 рублей
          </Text>
        </>
      ),
      image: mixingImage,
    },
    {
      title: "Запись",
      id: "recording",
      content: (
        <>
          Один час записи:{' '}
          <Text as="b" color="#ffb100">
            1300 рублей
          </Text>
          <br />
          день записи (с 11:00 до 22:00):{' '}
          <Text as="b" color="#ffb100">
            13000 рублей
          </Text>
        </>
      ),
      image: recordingImage,
    },
    {
      title: "Мастеринг",
      id: "mastering",
      content: (
        <>
          Мастеринг одного трека:{' '}
          <Text as="b" color="#ffb100">
            2000 рублей
          </Text>
        </>
      ),
      image: masteringImage,
    },
  ];

  return (
    <Container>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className={css.main}
      >
        <div className={css['block-content']}>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              id={service.id}
              content={service.content}
              image={service.image}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

export default ServicesBlock
