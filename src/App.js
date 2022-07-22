import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HeaderMenu from './component/headerMenu/headerMenu';
import Header2 from './component/header2/header2';
import MainPage from './component/mainPage/mainPage';
import Inflasi from './component/inflasi/inflasi';
import Footer from './component/footer/footer';
import Penduduk from './component/penduduk/penduduk';
import IPM from './component/IPM/ipm';
import TPAK from './component/TPAK/tpak';
import TPT from './component/TPT/tpt';
import Miskin from './component/miskin/miskin';
import Pariwisata from './component/pariwisata/pariwisata';
import MelekHuruf from './component/melekhuruf/melekhuruf';
import PDRB from './component/PDRB berlaku/pdrb';

function App() {
  return (
    <div className='all'>
      <HeaderMenu/>
      <Header2/>
      
      <Routes>
            <Route path="/" exact element={<MainPage/>} />
            <Route path="/indikator/Inflasi" element={<Inflasi/>} />    
            <Route path="/indikator/Penduduk" element={<Penduduk/>} />
            <Route path="/indikator/IPM" element={<IPM/>} />
            <Route path="/indikator/TPAK" element={<TPAK/>} />
            <Route path="/indikator/TPT" element={<TPT/>} />
            <Route path="/indikator/PendudukMiskin" element={<Miskin/>} />
            <Route path="/indikator/Pariwisata" element={<Pariwisata/>} />
            <Route path="/indikator/MelekHuruf" element={<MelekHuruf/>} />
            <Route path="/indikator/PDRB" element={<PDRB/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
