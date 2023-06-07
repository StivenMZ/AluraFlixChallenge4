import React, { useState } from 'react';
import styled from 'styled-components';


const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 1;
  background-color: ${(props) => props.borderColor};
  color: #f5f5f5;
  padding: 1rem;
  opacity: 0.86;
  width: 80%;
  height: auto;
  font-size: 1.875rem;
  display: none;
  cursor: pointer;
`;

const Content = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border: 0.22rem solid ${(props) => props.borderColor};
  margin: 0;
  position: relative;

  &:hover ${TitleContainer} {
    display: block;
  }

  &:hover {
    border-color: #2A7AE4;
  }

`;

const VideoCard = ({ src, videoUrl, titulo, borderColor, height, width }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoError = () => {
    window.location.href = videoUrl;
  };

  function obtenerIDVideo(url) {
    try {
      const videoUrl = new URL(url);
      const videoID = videoUrl.searchParams.get('v');
      return videoID;
    } catch (error) {
      console.log('Error al obtener el ID del video:', error);
      return '';
    }
  }

  const urlReal = obtenerIDVideo(videoUrl);
  const realUrl = `https://www.youtube.com/embed/${urlReal}`;

  return (
    <Content borderColor={borderColor} height={height} width={width}>
      {isVideoPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src={realUrl}
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <Img src={src} alt={`Video ${titulo}`} onClick={handleVideoClick} />

          <TitleContainer borderColor={borderColor} onClick={handleVideoClick}>
            {titulo}
          </TitleContainer>
        </>
      )}
    </Content>
  );
};

export default VideoCard;
