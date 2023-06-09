import ResetStyles from './ResetStyles';
import Global from './Global';
import React, { useState } from 'react';
import DefaultPage from './Components/DefaultPage'
import RegistroVideo from './Components/Registration/VideoRegistration';
import RegistroCategoria from './Components/Registration/CatergoryRegistration';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';

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
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </DefaultPage>
    </React.Fragment>
    </Router> 
  );
}

export default App;
