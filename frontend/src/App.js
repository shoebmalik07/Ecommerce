import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import { Flex } from '@chakra-ui/react';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Flex
          as='main'
          dir='column'
          mt='72px'
          py='6'
          px='6'
          bgColor='gray.200'

        >
          {/* <HomeScreen /> */}
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App