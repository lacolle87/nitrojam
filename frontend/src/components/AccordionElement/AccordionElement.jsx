import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

export function AccordionElement({title, text, children}) {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{bg: '#ffb100', color: 'white'}}>
        <Box as="span" flex="1" textAlign="left" fontSize="20px">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{ children ? children : text }</AccordionPanel>
    </AccordionItem>
  )
}
