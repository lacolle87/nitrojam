import { Container } from 'reactstrap'
import { motion } from 'framer-motion'
import { animationVariants, AnimationVariant } from '../../constants/animationList'
import { ContactForm } from '../ContactForm/ContactForm.tsx'
import css from './ContactBlock.module.scss'
import { Link } from 'react-router-dom'
import React from 'react'

interface ContactBlockProps {}

const  ContactBlock: React.FC<ContactBlockProps> = () => {
  return (
    <>
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp as AnimationVariant}
          viewport={{ once: true, amount: 0.2 }}
          className={css.main}
        >
          <div className={css.block_info}>
            <div className={css.contacts}>
              <h1>Контакты</h1>
              <div className={css.block}>
                <h2>Telegram</h2>
                <Link to={'https://t.me/BorisBungalow'}>
                  <i className="fa fa-telegram"></i> BorisBungalow
                </Link>
              </div>
              <div className={css.block}>
                <h2>Email</h2>
                <Link to={'mailto:record@nitrojam.ru'}>
                  <i className="fa fa-envelope"></i> record@nitrojam.ru
                </Link>
              </div>
            </div>
          </div>
          <div className={css.block_form}>
            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export default ContactBlock