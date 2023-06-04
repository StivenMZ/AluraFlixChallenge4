import ResetStyles from './ResetStyles';
import Global from './Global';
import React, { useState } from 'react';
import Banner from './Components/Banner';
import DefaultPage from './Components/DefaultPage'
import Carrusel from './Components/Carrusel/Carrusel';
import TextField from './Components/TextField';
import RegistroVideo from './Components/Registration/VideoRegistration';
import RegistroCategoria from './Components/Registration/CatergoryRegistration';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Succes from './Components/Succes';

function App() {



  return (
    <Router>
    <React.Fragment>
      <ResetStyles/>
      <Global />
      <DefaultPage>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<RegistroVideo />} />
        <Route path="/new-category" element={<RegistroCategoria />} />
      </Routes>
      </DefaultPage>
    </React.Fragment>
    </Router> 
  );
}

export default App;
