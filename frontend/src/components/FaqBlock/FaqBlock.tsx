import React from 'react'
import { Container } from 'reactstrap'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/animationList'
import css from './FaqBlock.module.scss'
import { Accordion } from '@chakra-ui/react'
import { AccordionElement } from '../AccordionElement/AccordionElement';

export function FaqBlock() {
  return (
    <Container>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className={css.main}
      >
        <h2 className={css.title}>F.A.Q.</h2>
        <p className={css.content}>Часто задаваемые вопросы</p>
        <div className={css['main-accordion']}>
          <Accordion allowToggle width={'xl'}>
            <AccordionElement
              title="Во сколько приезжать на запись?"
              text="Студия работает с 11:00 до 22:00. В случае бронирования студии на весь день приезжайте в 11:00."
            />
            <AccordionElement
              title="Есть ли поблизости магазины? Доставка?"
              text="Да, в шаговой доступности четыре магазина, и аптека. Работает яндекс доставка и есть местная пиццерия."
            />
            <AccordionElement
              title="Если забронировано несколько дней подряд, есть где остановиться?"
              text="В одном километре от студии находится гостиница."
            />
            <AccordionElement
              title="Когда лучше отредактировать барабаны?"
              text="Определенно, лучше это сделать сразу. До начала записи других инструментов."
            />
            <AccordionElement
              title="Сколько времени надо для записи одной песни целиком?"
              text="Все зависит от подготовленности и мастерства музыкантов, но в среднем на это уходит один целый день."
            />
          </Accordion>
        </div>
      </motion.div>
    </Container>
  )
}

export default FaqBlock
