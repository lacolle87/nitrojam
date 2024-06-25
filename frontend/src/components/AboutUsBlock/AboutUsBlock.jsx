import { Container } from 'reactstrap'
import { motion } from 'framer-motion'
import { animationVariants } from '../../constants/animationList'
import css from './AboutUsBlock.module.scss'

import { Tooltip } from '@chakra-ui/react'

import {
  Button,
  Box,
  Card,
  CardBody,
  UnorderedList,
  ListItem,
  Accordion,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AccordionElement } from '../AccordionElement/AccordionElement'

import logo from '../../assets/images/landingpage/aboutus_photos/logobig.png'
import photo1 from '../../assets/images/landingpage/aboutus_photos/row_photos/photo1.avif'
import photo2 from '../../assets/images/landingpage/aboutus_photos/row_photos/photo2.avif'
import photo3 from '../../assets/images/landingpage/aboutus_photos/row_photos/photo3.avif'
import photo4 from '../../assets/images/landingpage/aboutus_photos/row_photos/photo4.avif'

export function AboutUsBlock() {
  return (
    <>
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className={css.main}
        >
          <div className={css.blockimg}>
            <img src={logo} alt="logo" />
          </div>
          <div className={css.blockcontent}>
            <h2>
              <strong>В студии Nitrojam REС вас ждет все необходимое:</strong>
            </h2>
            <ul>
              <li>Профессиональные звукорежиссеры</li>
              <li>Лучшее звукозаписывающее оборудование</li>
              <li>Потрясающая акустика</li>
              <li>Уютная творческая атмосфера</li>
            </ul>
            <p>
              Студия располагается в Поярково (Московская область, городской
              округ Химки, 18 км по Ленинградскому шоссе). Общая площадь более
              100 квадратных метров.
            </p>
            <p>
              <strong>Мы ждем вас ежедневно с 11:00 до 22:00.</strong>
            </p>
            <div className={css.socialbuttons}>
              <Button
                colorScheme="messenger"
                as={Link}
                to="https://vk.ru/nitrojam"
              >
                <i className="fa fa-vk"></i>
              </Button>
              <Tooltip
                hasArrow
                label="Meta - запрещенная организация в РФ."
                bg="blue.800"
                color="white"
                borderRadius="5px"
              >
                <Button
                  colorScheme="pink"
                  as={Link}
                  to="https://www.instagram.com/boristhenitrojam/"
                >
                  <i className="fa fa-instagram"></i>
                </Button>
              </Tooltip>
              <Button colorScheme="red" as={Link} to="/contact" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}>
                <i className="fa fa-envelope"></i>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
      <div className={css.devices_title}>
        <Container>
          <h2 className={css.devices_name}>Оборудование студии</h2>
        </Container>
      </div>
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeLeft}
          viewport={{ once: true, amount: 0.2 }}
          className={css.main}
        >
          <Card width="100%">
            <CardBody>
              <Box width="100%">
                <Accordion allowToggle width={'100%'}>
                  <AccordionElement title={'Консоли'}>
                    <UnorderedList spacing={3}>
                      <ListItem>Solid State Logic Matrix</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                  <AccordionElement title={'DAW, AD/DA, Мониторы'}>
                    <UnorderedList spacing={3}>
                      <ListItem>Steinberg Cubase 12</ListItem>
                      <ListItem>SSL Solid State Logic Alpha Link MADI AX Converter</ListItem>
                      <ListItem>Focal SM9</ListItem>
                      <ListItem>Avantone MixCubes</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                  <AccordionElement title={'OUTBOARD'}>
                    <Accordion allowToggle>
                      <AccordionElement title="Предусилители">
                        <UnorderedList spacing={3}>
                          <ListItem>API A2D</ListItem>
                          <ListItem>Phoenix Audio DRS-1R (3)</ListItem>
                          <ListItem>Roll Music Systems Tubule (2)</ListItem>
                          <ListItem>Rupert Neve 5024</ListItem>
                          <ListItem>SSL XLogic Alpha VHD Pre 4-Channel Mic Preamp</ListItem>
                          <ListItem>Maag Audio PREQ2 2 Kanal Preamp & EQ</ListItem>
                        </UnorderedList>
                      </AccordionElement>
                      <AccordionElement title="Динамическая обработка">
                        <UnorderedList spacing={3}>
                          <ListItem>API 2500</ListItem>
                          <ListItem>Chandler LTD Little Devil Compressor (2)</ListItem>
                          <ListItem>Purple Audio MC77</ListItem>
                          <ListItem>Empirical Labs Distressor EL8X (2)</ListItem>
                          <ListItem>Elysia Mpressor (2)</ListItem>
                          <ListItem>Elysia Nvelope</ListItem>
                          <ListItem>Roll Music Systems Valvop</ListItem>
                          <ListItem>Nitrojam 1176 rev.A</ListItem>
                        </UnorderedList>
                      </AccordionElement>
                      <AccordionElement title="Эквалайзеры">
                        <UnorderedList spacing={3}>
                          <ListItem>API 5500</ListItem>
                          <ListItem>A Designs Hammer</ListItem>
                          <ListItem>A Designs EM-PEQ</ListItem>
                          <ListItem>Purple Audio Lil PEQR (2)</ListItem>
                          <ListItem>SSL X-Rack E Series EQ Module (2)</ListItem>
                          <ListItem>SSL X-Rack SuperAnalogue EQ Module (2)</ListItem>
                          <ListItem>SSL XLogic X-Rack Stereo Dynamics Module (2)</ListItem>
                          <ListItem>SSL XLogic X-Rack Stereo G Bus Compressor Module</ListItem>
                        </UnorderedList>
                      </AccordionElement>
                      <AccordionElement title="Эффекты">
                        <UnorderedList spacing={3}>
                          <ListItem>Bricasti M7</ListItem>
                          <ListItem>Rupert Neve Designs 542 (2)</ListItem>
                        </UnorderedList>
                      </AccordionElement>
                    </Accordion>
                  </AccordionElement>
                  <AccordionElement title={'Микрофоны'}>
                    <UnorderedList spacing={3}>
                      <ListItem>AKG D12</ListItem>
                      <ListItem>AKG D880</ListItem>
                      <ListItem>AKG C451B</ListItem>
                      <ListItem>Brauner Phantom</ListItem>
                      <ListItem>Beyerdynamic M 201 TG (3)</ListItem>
                      <ListItem>Shure KSM313</ListItem>
                      <ListItem>Shure SM7B</ListItem>
                      <ListItem>Shure SM57</ListItem>
                      <ListItem>Shure Beta 57 (2)</ListItem>
                      <ListItem>Shure KSM44 (2)</ListItem>
                      <ListItem>Oktava MK012 Bill Sitler Mod (2)</ListItem>
                      <ListItem>Royer Labs R121</ListItem>
                      <ListItem>Royer Labs SF12</ListItem>
                      <ListItem>Josephson e22s (2)</ListItem>
                      <ListItem>Sennheiser MD441</ListItem>
                      <ListItem>Sennheiser e 902</ListItem>
                      <ListItem>Sennheiser e 906</ListItem>
                      <ListItem>Sony C48</ListItem>
                      <ListItem>Telefunken CU-29</ListItem>
                      <ListItem>Telefunken M60 (2)</ListItem>
                      <ListItem>Telefunken M82</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                  <AccordionElement title="Усиление">
                    <UnorderedList spacing={3}>
                      <ListItem>ENGL Savage 120</ListItem>
                      <ListItem>Mesa Boogie Mark V</ListItem>
                      <ListItem>Peavey 6505+</ListItem>
                      <ListItem>Fender Super Reverb</ListItem>
                      <ListItem>Fender Bassman 100</ListItem>
                      <ListItem>Fender Bassman 400</ListItem>
                      <ListItem>Rivera 55-12</ListItem>
                      <ListItem>Ampeg SVT-CL</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                  <AccordionElement title="Ударные">
                    <UnorderedList spacing={3}>
                      <ListItem>Pearl MCX 22-16-13-12</ListItem>
                      <ListItem>Brady Jarrah Ply Snare Drum 14x6.5</ListItem>
                      <ListItem>Pearl Reference Snare Drum 14x5</ListItem>
                      <ListItem>
                        Pearl Free Floating Steel Snare Drum 14x3.5
                      </ListItem>
                      <ListItem>Noble & Cooley 5x14 SS</ListItem>
                      <ListItem>Ludwig Black Beauty Snare Drum 14x5</ListItem>
                      <ListItem>Gretsch Aluminum Snare Drum 14x6.5</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                  <AccordionElement title="Прочее">
                    <UnorderedList spacing={3}>
                      <ListItem>A Designs REDDI</ListItem>
                      <ListItem>Litlle Labs Redeye 3d Phantom</ListItem>
                      <ListItem>Radial JDI (2)</ListItem>
                      <ListItem>Radial EXTC (2)</ListItem>
                      <ListItem>Radial SGI (2)</ListItem>
                    </UnorderedList>
                  </AccordionElement>
                </Accordion>
              </Box>
            </CardBody>
          </Card>
        </motion.div>
        <div className={css.photos}>
          <img src={photo1} alt="photo1" />
          <img src={photo2} alt="photo2" />
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" />
        </div>
      </Container>
    </>
  )
}
