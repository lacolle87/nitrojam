import {
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {object, string} from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(
      object().shape({
        name: string().trim().required('Введите свое имя'),
        email: string()
          .trim()
          .email('errorMessage')
          .required('Введите свой email'),
        telegram: string().trim(),
        message: string()
          .trim()
          .required('Введите сообщение')
          .min(5, 'Минимальное количество символов - 5')
          .max(200, 'Максимальное количество символов - 200'),
      })
    ),
    mode: 'onBlur',
  })
  const onSubmit = async (data) => {
    console.log(JSON.stringify(data))
    // await fetch('url', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name?.message}>
        <FormLabel>Имя</FormLabel>
        <Input
          pl={'2'}
          borderRadius={'0'}
          borderColor={'#333333'}
          {...register('name')}
          type="text"
        />
        {errors.name?.message && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt={"5"} isInvalid={errors.email?.message}>
        <FormLabel>Email</FormLabel>
        <Input
          pl={'2'}
          borderRadius={'0'}
          borderColor={'#333333'}
          {...register('email')}
          type="email"
        />
        {errors.email?.message && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt={"5"} isInvalid={errors.telegram?.message}>
        <FormLabel>Telegram (Опционально)</FormLabel>
        <Input
          pl={'2'}
          borderRadius={'0'}
          borderColor={'#333333'}
          {...register('telegram')}
          type="text"
        />
        {errors.telegram?.message && (
          <FormErrorMessage>{errors.telegram.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt={"5"} isInvalid={errors.message?.message}>
        <FormLabel>Сообщение</FormLabel>
        <Textarea
          pl={'2'}
          minHeight={'210px'}
          maxHeight={'210px'}
          resize={'none'}
          borderRadius={'0'}
          borderColor={'#333333'}
          {...register('message')}
        ></Textarea>
        {errors.message?.message && (
          <FormErrorMessage>{errors.message.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        mt={"5"}
        variant="outline"
        width="27%"
        bgColor="#333333"
        color="#ffffff"
        borderRadius="0"
        _hover={{bg: '#f9c349', color: '#000000'}}
        type="submit"
      >
        Отправить
      </Button>
    </form>
  )
}
