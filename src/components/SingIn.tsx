import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { login } from "../services/login";


export const SingIn = () => {
  return (
    <Flex direction='column' gap='3' justify='center' >
      <Spacer />
      <FormControl variant="floating" id="email">
        <Input placeholder='' type="email" />
        <FormLabel>E-mail</FormLabel>
      </FormControl>
      <FormControl variant="floating" id="password">
        <Input placeholder='' type="password" />
        <FormLabel>Password</FormLabel>
      </FormControl>
      <Center>
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='25px'>
          Login
        </Button>
      </Center>
    </Flex>

  );
};
