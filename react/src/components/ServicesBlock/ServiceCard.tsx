import {Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'
import css from './ServicesBlock.module.scss'
import {Link} from 'react-router-dom'
import React from 'react'

interface ServiceCardProps {
  title: string;
  content: React.ReactNode;
  image: string;
  id: string;
}

function ServiceCard({ title, content, image, id }: ServiceCardProps) {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      position="relative"
      variant="outline"
      marginTop="20px"
    >
      <div id={id} className={css.line}></div>
      <Image
        padding="3"
        borderRadius="2xl"
        objectFit="cover"
        maxW={{ base: '100%', md: '400px' }}
        src={image}
        alt={title}
      />
      <Stack width="100%">
        <CardBody>
          <Heading size="xl">{title}</Heading>
          <Text pt="2">{content}</Text>
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
            _hover={{ bg: '#f9c349', color: '#000000' }}
          >
            Написать
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default ServiceCard