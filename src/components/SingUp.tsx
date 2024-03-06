import { Flex, Text, Spacer, FormControl, Input, FormLabel, Center, Button, ButtonGroup } from "@chakra-ui/react"
import { login } from "../services/login"


interface SingUpProps {
    handleSingUp: () => void
}


export const SingUp = () => {

    const handleSingUp = () => {

        console.log('SingUp')
    }



    return (
        <>
            <Flex direction='column' gap='3' justify='center'>
                <Text fontSize='2xl' fontWeight='bold' textAlign='center'>Cadastro</Text>
                <Spacer />
                <FormControl variant="floating" id="email">
                    <Input placeholder='' type="email" />
                    <FormLabel>Nome</FormLabel>
                </FormControl>
                <FormControl variant="floating" id="password">
                    <Input placeholder='' type="password" />
                    <FormLabel>Pass</FormLabel>
                </FormControl>
                <FormControl variant="floating" id="password">
                    <Input placeholder='' type="password" />
                    <FormLabel>Repet Pass</FormLabel>
                </FormControl>
                <Center>
                    <ButtonGroup>
                        <Button onClick={handleSingUp} colorScheme='teal' size='sm' width='100%' marginTop='25px'>
                            Enviar
                        </Button>
                        <Button colorScheme='red' size='sm' width='100%' marginTop='25px'>
                            Cancelar
                        </Button>
                    </ButtonGroup>
                </Center>
            </Flex>
        </>
    )
}