import ResetStyles from './ResetStyles';
import Global from './Global';
import React from 'react';
import Banner from './Components/Banner';
import DefaultPage from './Components/DefaultPage'
import Carrusel from './Components/Carrusel/Carrusel';
import videos from './Datos/datos.iniciales.json'
import TextField from './Components/TextField';


function App() {
  return (
    <React.Fragment>
      <ResetStyles/>
      <Global />
      <DefaultPage>
        <Banner />
        <Carrusel videos={videos.videos} borderColor={"#6BD1FF"}/>
        <Carrusel videos={videos.videos} borderColor={"#00C86F"}/>
        <Carrusel videos={videos.videos} borderColor={"#FFBA05"}/>
        <TextField placeholder={"Hola"} borderColor={"#2A7AE4"} />

      </DefaultPage>
    </React.Fragment>
  );
}

export default App;
