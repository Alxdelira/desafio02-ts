import { Box, Center, Text, Flex, Square, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react"
import { SingUp } from "./SingUp"

export const Header = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p={15}>
      <Box p='2'>
        <Heading size='md'>DIO_BANKING</Heading>
      </Box>
      <Spacer />      
    </Flex>
  )
}
