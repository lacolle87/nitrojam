import React from 'react'
import {
  Box,
  Text,
  Icon,
} from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'
import css from '../ContactBlock/ContactBlock.module.scss'
import { Link } from 'react-router-dom'

export function ContactForm() {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      textAlign="center"
      borderColor="#333333"
    >
      <Icon as={FiMail} w={10} h={10} color="#333333" />
      <Text fontSize="xl" mt={4}>
        Для связи и бронирования используйте Telegram и почту
      </Text>
      <Text mt={2} color="gray.500">
        <div className={css.block}>
          <Link to={'https://t.me/BorisBungalow'}>
            <i className="fa fa-telegram"></i> BorisBungalow
          </Link>
        </div>
        <div className={css.block}>
          <Link to={'mailto:record@nitrojam.ru'}>
            <i className="fa fa-envelope"></i> record@nitrojam.ru
          </Link>
        </div>
      </Text>
    </Box>
  )
}
