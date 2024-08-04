import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import {ReactNode} from 'react'

interface AccordionElementProps {
  title: string
  text?: string
  children?: ReactNode
}

export function AccordionElement({
                                   title,
                                   text,
                                   children,
                                 }: AccordionElementProps) {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: '#ffb100', color: 'white' }}>
        <Box as="span" flex="1" textAlign="left" fontSize="20px">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{children ? children : text}</AccordionPanel>
    </AccordionItem>
  );
}
