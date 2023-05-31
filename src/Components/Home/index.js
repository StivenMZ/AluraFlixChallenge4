import React from "react"
import Banner from "../Banner"
import Carrusel from "../Carrusel/Carrusel"
import videos from '../../Datos/datos.iniciales.json'

const Home = () =>{

return (
<>
<Banner />
<Carrusel videos={videos.videos} borderColor={"#6BD1FF"}/>
<Carrusel videos={videos.videos} borderColor={"#00C86F"} title={"Backend"}/>
<Carrusel videos={videos.videos} borderColor={"#FFBA05"} title={"Testing"}/>
</>
)
}

export default Home;