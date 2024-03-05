import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { SingUp } from './components/SingUp';

function App() {
  return (
    <ChakraProvider>
      <Layout>        
          <Login />      
      </Layout>
    </ChakraProvider>
  );
}

export default App;
