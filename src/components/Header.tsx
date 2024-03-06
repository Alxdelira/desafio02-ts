import { Box, Text, Flex, Square, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react"
import { BsBank } from "react-icons/bs";

export const Header = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p={15} flexDir='row'>
      <BsBank size={40} />
      <Heading size='md'>DIO_BANKING</Heading>
      <Spacer />
    </Flex>
  )
}
