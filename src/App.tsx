import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { CardLogin } from './components/CardLogin';

function App() {
  return (
    <ChakraProvider>
      <Layout>        
          <CardLogin/>      
      </Layout>
    </ChakraProvider>
  );
}

export default App;
