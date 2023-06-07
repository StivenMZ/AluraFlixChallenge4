import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import player from '../../Images/player.png';
import VideoCard from '../Carrusel/VideoCard';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 43%;
`;

const DivCard = styled.div`
  width: 30%;
  position: relative;
  right: 11%;
`;

const FrontTitle = styled.div`
  display: flex;
  width: 44.8%;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 4.375rem;
  background: ${props=> props.color};
  border-radius: 0.25rem;
  text-align: center;
  justify-content: center;
  padding: 0.625rem 0px;
  margin-bottom: 6%;
`;

const ContentSub = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 2.875rem;
  line-height: 3.375rem;
  color: #F5F5F5;
  width: 75%;
`;

const PhContent = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  width: 73%;
  color: #F5F5F5;
`;

const SubContent = styled.div`
  position: relative;
  left: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.875rem;
`;

const BannerContent = ({color}) => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaMain, setCategoriaMain] = useState({ name: '' });
  const [videoMain, setVideoMain] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/categories', {
          method: 'GET',
        });

        if (response.ok) {
          const categoriasData = await response.json();
          setCategorias(categoriasData);
          if (categoriasData.length > 0) {
            setCategoriaMain(categoriasData[0]);
          }
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
          if (videosData.length > 0) {
            const primerVideo = videosData.find(
              (video) => video.category === categoriaMain.name
            );
            setVideoMain(primerVideo);
          } else {
            setVideoMain(null); // No hay videos disponibles
          }
        } else {
          console.log('Error al realizar la solicitud GET');
        }
      } catch (error) {
        console.log('Error en la solicitud GET:', error);
      }
    };

    fetchVideos();
  }, [categoriaMain.name]);

  useEffect(() => {
    console.log(videos);
    console.log(videoMain);
  }, [videos, videoMain]);


  return (
    <Content>
      <SubContent>
      <FrontTitle color={color}>{categoriaMain.name}</FrontTitle>
        <ContentSub>{videoMain?.titulo}</ContentSub>
        <PhContent>{videoMain?.descripcion}</PhContent>
      </SubContent>
      {videoMain?.urlImagen && videoMain?.urlVideo && videoMain?.titulo && (
        <DivCard>
          <VideoCard
            src={videoMain?.urlImagen}
            videoUrl={videoMain.urlVideo}
            titulo={videoMain?.titulo}
            borderColor={categoriaMain.color}
          />
        </DivCard>
      )}
    </Content>
  );
};

export default BannerContent;
