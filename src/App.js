
import './styles.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Reloj from './components/Reloj';
import CaracteristicasJuego from './components/CaracteristicasJuego';
import BloqueCaracteristica from './components/BloqueCaracteristica';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
  <Menu />
      <Banner />
      <Reloj />
      <CaracteristicasJuego />
      <BloqueCaracteristica/>
      <Footer />
    </div>
  );
}

export default App;
