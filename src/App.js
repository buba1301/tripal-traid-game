import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Text from './components/Text';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Text element='div' italic>
        blablabla
      </Text>
      <Text element='span'>blablabla</Text>
      <Text element='p'>blablabla</Text>
      <Footer />
    </>
  );
}

export default App;
