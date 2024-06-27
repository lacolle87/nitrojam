import React from 'react'
import {Container} from 'reactstrap'
import {motion} from 'framer-motion'
import {animationVariants} from '../../constants/animationList'
import css from './ServicesBlock.module.scss'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import useImage from '../../services/useImage'

interface ServiceCardProps {
  title: string;
  content: React.ReactNode;
  image: string;
  id: string;
}

function CardMusic({title, content, image, id}: ServiceCardProps) {
  return (
    <Card
      direction={{base: 'column', md: 'row'}}
      overflow="hidden"
      position="relative"
      variant="outline"
      marginTop={'20px'}
    >
      <div id={id} className={css.line}></div>
      <Image
        padding={'3'}
        borderRadius="2xl"
        objectFit="cover"
        maxW={{base: '100%', md: '400px'}}
        src={image}
        alt={title}
      />
      <Stack width="100%">
        <CardBody>
          <Heading size="xl">{title}</Heading>
          <Text pt={'2'}>{content}</Text>
        </CardBody>

        <CardFooter>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            width="29.5%"
            colorScheme="yellow"
            border="2px"
            borderColor="yellow.500"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            _hover={{bg: '#f9c349', color: '#000000'}}
          >
            Написать
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export function ServicesBlock() {
  const mixing = useImage('main', 'mixing.avif')
  const mastering = useImage('main', 'mastering.avif')
  const recording = useImage('main', 'record.avif')

  return (
    <Container>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{once: true, amount: 0.2}}
        className={css.main}
      >
        <div className={css['block-content']}>
          
          <CardMusic
            title="Сведение"
            id={"mixing"}
            content={
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
            }
            image={mixing}
          />
          <CardMusic
            title="Запись"
            id={"recording"}
            content={
              <>
                Один час записи:{' '}
                <Text as="b" color="#ffb100">
                  1300 рублей
                </Text>
                <br />
                день записи (с 11:00 до 22:00):{' '}
                <Text as="b" color="#ffb100">
                  12000 рублей
                </Text>
              </>
            }
            image={recording}
          />
          <CardMusic
            title="Мастеринг"
            id={"mastering"}
            content={
              <>
                Мастеринг одного трека:{' '}
                <Text as="b" color="#ffb100">
                  2000 рублей
                </Text>
              </>
            }
            image={mastering}
          />
        </div>
      </motion.div>
    </Container>
  )
}
