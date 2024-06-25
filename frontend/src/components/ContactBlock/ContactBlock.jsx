import {Container} from 'reactstrap'
import {motion} from 'framer-motion'
import {animationVariants} from '../../constants/animationList'
import {ContactForm} from '../../components/ContactForm/ContactForm'
import css from './ContactBlock.module.scss'
import {Link} from 'react-router-dom'

export function ContactBlock() {
  return (
    <>
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{once: true, amount: 0.2}}
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
                <h2>Адрес</h2>
                <p>
                  Московская область, городской округ Химки, Поярково, дом 131
                </p>
              </div>
              <div className={css.block}>
                <h2>Email</h2>
                <Link to={'mailto:record@nitrojam.ru'}>
                  <i className="fa fa-envelope"></i> info@nitrojamrec.com
                </Link>
              </div>
              <div className={css.block}>
                <h2>Часы работы</h2>
                <p>
                  <i className="fa fa-smile-o"></i> С 11:00 до 23:00
                </p>
              </div>
            </div>
          </div>
          <div className={css.block_form}>
            <ContactForm />
          </div>
        </motion.div>
      </Container>
      <div className={css.map}>
        <iframe
          src={"https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&um=constructor%3A512334de0bbc319e88bac79433cd3b51ca7528082cb2249a8a1df15148b7040e"}
          allowFullScreen={true}
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  )
}
