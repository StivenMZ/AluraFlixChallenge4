import ResetStyles from './ResetStyles';
import Global from './Global';
import React from 'react';
import Banner from './Components/Banner';
import DefaultPage from './Components/DefaultPage'
import Carrusel from './Components/Carrusel/Carrusel';
import videos from './Datos/datos.iniciales.json'
import TextField from './Components/TextField';
import RegistroVideo from './Components/Registration/VideoRegistration';
import RegistroCategoria from './Components/Registration/CatergoryRegistration';

function App() {
  return (
    <React.Fragment>
      <ResetStyles/>
      <Global />
   {/*    <RegistroCategoria /> */}
     {/*  <RegistroVideo /> */}
      <DefaultPage>
        <Banner />
        <Carrusel videos={videos.videos} borderColor={"#6BD1FF"}/>
        <Carrusel videos={videos.videos} borderColor={"#00C86F"} title={"Backend"}/>
        <Carrusel videos={videos.videos} borderColor={"#FFBA05"} title={"Testing"}/>
      </DefaultPage>
    </React.Fragment>
  );
}

export default App;
