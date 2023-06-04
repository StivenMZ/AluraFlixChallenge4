import React, { useEffect, useState } from "react"
import Banner from "../Banner"
import Carrusel from "../Carrusel/Carrusel"

const Home = () =>{
const [videos, setVideos] = useState([]);
const [categorias, setCategorias] = useState(null);

useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/categories', {
          method: 'GET',
        });

        if (response.ok) {
          const categoriasData = await response.json();
          setCategorias(categoriasData);
        } else {
          console.log('Error al obtener las categorías');
        }
      } catch (error) {
        console.log('Error en la solicitud de categorías:', error);
      }
    };

    fetchCategorias();

    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3001/videos', {
          method: 'GET',
        });

        if (response.ok) {
          const videosData = await response.json();
          setVideos(videosData);
        } else {
          console.log('Error al realizar la solicitud GET');
        }
      } catch (error) {
        console.log('Error en la solicitud GET:', error);
      }
    };

    fetchVideos();
  }, []);

const [primerApartadoVideos, setPrimerApartadoVideos] = useState(null);
const primerApartado = categorias?.[0];
useEffect(()=>{
console.log(primerApartado);
setPrimerApartadoVideos(videos.filter(video => video.category === primerApartado.name));
console.log(primerApartadoVideos);
}, [primerApartado])

const first = ()=>{
    if(primerApartado){
    let videosF =[];
    primerApartadoVideos.map((video, index)=>{
       if(index !== 0){
        videosF.push(video);
       } 
    })
    console.log(videosF)
    return <Carrusel videos={videosF} borderColor={primerApartado.color} />
}   else{
    return null
}
}

return (
    <>
      <Banner color={primerApartado?.color} />
      {first()}
      {categorias !== null ? (
        categorias.slice(1).map((categoria, index) => {
        console.log(categoria);
          const push = videos.filter(video => video.category === categoria.name);
          console.log(categoria.color, categoria.name )
          if(push.length > 0){
          return (
            
            <Carrusel videos={push} borderColor={categoria.color} title={categoria.name} key={index} />
          );
        } else {
            return null
        }
    }
        )
      ) : null}
    </>
  );
};

export default Home;