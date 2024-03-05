import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  extendTheme,
} from "@chakra-ui/react";
import { login } from "../services/login";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

export const Login = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight='100vh' backgroundColor='#9413dc' display='flex' justifyContent='center' alignItems='center'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' w='sm' p='5' h='sm'   >
          <Tabs variant='enclosed'>
            <TabList>
              <Tab>Sing In</Tab>
              <Tab>Sing Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
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
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </ChakraProvider >

  );
};
