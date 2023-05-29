import React from 'react';
import styled from 'styled-components';

//USO DE API DE YOUTUBE PARA MINIATURAS
const getVideoId = (url) => {
    if (url) {
      const videoId = url.split('v=')[1];
      return videoId;
    }
    return null;
  };
  

  const getThumbnailUrl = (videoUrl) => {
    const videoId = getVideoId(videoUrl);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return thumbnailUrl;
  };

///


const Title = styled.h1`
font-size: 30px;
height: 30px;

`

const Img = styled.img`
width: 100%;
height: 100%;
`;

  
const VideoCard = ({ videoUrl, titulo, borderColor }) => {

    const Content = styled.div`
width: 432px;
height: 260.85px;
border: 3px solid ${borderColor};
margin: 0;

`

    const thumbnailUrl = getThumbnailUrl(videoUrl);
  return (
    <Content >
      <Img src={thumbnailUrl} alt={`Video ${titulo}`} />
    </Content>
  );
};

export default VideoCard;

