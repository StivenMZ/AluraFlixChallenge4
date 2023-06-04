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
  width: 646px;
  height: 333.58px;
  position: relative;
  right: 2%;
`;

const FrontTitle = styled.div`
  display: flex;
  width: 296px;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  background: ${props=> props.color};
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  padding: 10px 0px;
  margin-bottom: 12%;
`;

const ContentSub = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 54px;
  color: #F5F5F5;
`;

const PhContent = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  width: 661px;
  color: #F5F5F5;
`;

const SubContent = styled.div`
  position: relative;
  left: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 14px;
`;

const PContent =
  'Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.';

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

  console.log(categoriaMain);
  console.log(color);

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
