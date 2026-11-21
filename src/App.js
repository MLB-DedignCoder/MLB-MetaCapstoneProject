import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import HighlightSection from './components/HighlightSection.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <HeroSection />
        <HighlightSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
};

export default App;
