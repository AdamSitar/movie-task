import {
  VStack
} from '@chakra-ui/react'
import Content from './components/Content'
import './styles.css'

function App() {
  return (
    <VStack 
      height="100vh"
      bg="black"
      width="full"
      overflow="hidden"
      spacing={0}
    >
      <Content/>
    </VStack>
  );
}

export default App;
