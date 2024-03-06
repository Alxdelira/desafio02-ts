import { Box, Center, Text, Flex, Square, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react"
import { BsBank } from "react-icons/bs";
export const Footer = () => {
  return (
    <Flex minWidth='max-content' justify='center' alignItems='center' gap='2' height='250px'>
      <Box display='flex' alignItems='center' flexDir='column'>
      <BsBank  size={50}/>
        <Heading size='md'>DIO_BANKING.Ltda</Heading>
        <Heading size='md'>Um Banco Seguro e Responsavel</Heading>
      </Box>
    </Flex>
  )
}

