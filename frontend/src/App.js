import Header from './components/Header';
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import { Flex } from '@chakra-ui/react';


const App = () => {
  return (
    <div>
      <Header/>
      <Flex
      as = 'main'
      dir='column'
      mt = '72px'
      py = '6'
      px = '6'
      bgColor='gray.200'
      
      >
        <HomeScreen/>
      </Flex>
      <Footer/>
    </div>
  )
}

export default App