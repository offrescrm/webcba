//import logo from './logo.svg';
//import './App.css';  

import Accueil from './pages/Accueil';
import RGPD from './pages/RGPD';
import Notfound from './pages/Notfound';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Accueil/>} />
        <Route path='/RGPD' exact element={<RGPD/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
