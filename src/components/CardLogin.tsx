import {
    Box,
    ChakraProvider,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    extendTheme,
  } from "@chakra-ui/react";
import { SingIn } from "./SingIn";
import { SingUp } from "./SingUp";
  
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
  
  export const CardLogin = () => {
    return (
      <ChakraProvider theme={theme}>
        <Box minHeight='100vh' backgroundColor='#9413dc' display='flex' justifyContent='center' alignItems='center'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' w='sm' p='5' h='1sm'   >
            <Tabs variant='enclosed'>
              <TabList>
                <Tab>Sing In</Tab>
                <Tab>Sing Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SingIn />
                </TabPanel>
                <TabPanel>
                  <SingUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </ChakraProvider >
  
    );
  };
  