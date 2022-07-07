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
import Page2 from './component/page2-mainpage/page2';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className='all'>
      <HeaderMenu/>
      <Header2/>
      
      <Routes>
            <Route path="/" exact element={<MainPage/>} />
            <Route path="/indikator/:id" element={<Page2/>} />    
      </Routes>
      {/* <Page2/> */}
      <Footer/>
    </div>
   
  );
}

export default App;
