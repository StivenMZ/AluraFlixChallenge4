import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  height: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const VideoCard = ({ src, videoUrl, titulo, borderColor }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const Content = styled.div`
    width: 432px;
    height: 260.85px;
    border: 3px solid ${borderColor};
    margin: 0;
  `;

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoError = () => {
    window.location.href = videoUrl;
  };

  return (
    <Content>
      {isVideoPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={handleVideoError}
        ></iframe>
      ) : (
        <Img src={src} alt={`Video ${titulo}`} onClick={handleVideoClick} />
      )}
    </Content>
  );
};

export default VideoCard;
