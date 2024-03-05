import { Box, Center, Text, Flex, Square, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' height='250px'>
      <Box p='2'>
        <Heading size='md'>DIO_BANKING</Heading>
      </Box>     
    </Flex>
  )
}

