import React from 'react';
import Slider from '../Slider';
import VideoCard from '../VideoCard';
import styled from 'styled-components';

const Title = styled.div`
    width: 130px;
    height: 46px;
    color: white;
    border-radius: 3px;
    background: ${props => props.background};
    margin: 3% 2%;
    font-size: 32px;
    font-weight: 400;
    line-height: 41px;
    display: inline-block;
    padding: 8px;
`;

const Carrusel = ({ videos, borderColor, title }) => {
  return (
    <>
      {title &&  <Title background={borderColor}>{title}</Title>}
      <Slider borderColor={borderColor}>
        {videos.map((video, index) => (
          <VideoCard key={index} videoUrl={video.url} titulo={video.titulo} borderColor={borderColor} />
        ))}
      </Slider>
    </>
  );
};


export default Carrusel;
