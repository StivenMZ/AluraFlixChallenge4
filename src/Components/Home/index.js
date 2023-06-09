import React, { useEffect, useState } from "react"
import Banner from "../Banner"
import Carrusel from "../Carrusel/Carrusel"
import Button from '../Button'
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const Home = () =>{
const [videos, setVideos] = useState([]);
const [categorias, setCategorias] = useState(null);
const [screen, setScreen] = useState(window.innerWidth);



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
    const handleResize = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };


  }, []);

const [primerApartadoVideos, setPrimerApartadoVideos] = useState(null);
const primerApartado = categorias?.[0];
useEffect(()=>{
setPrimerApartadoVideos(videos.filter(video => video.category === primerApartado.name));
}, [primerApartado])

const first = ()=>{
    if(primerApartado){
    let videosF =[];
    primerApartadoVideos.map((video, index)=>{
       if(index !== 0){
        videosF.push(video);
       } 
    })
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
          const push = videos.filter(video => video.category === categoria.name);
          if(push.length > 0){
          return (
            <DivCarrusel>
            <Carrusel videos={push} borderColor={categoria.color} title={categoria.name} key={index} descripcion={categoria.descripcion} />
            </DivCarrusel>
          );
        } else {
            return null
        }
    }
        )
      ) : null}
{screen < 769 && (
  <Link to="/new-video">
    <Button text="Nuevo video" textColor="#FFFFFF" backGround="#2A7AE4" borderColor="#2A7AE4" />
  </Link>
)}



    </>
  );
};

const DivCarrusel = styled.div`
margin-bottom: 8%;
`;

export default Home;