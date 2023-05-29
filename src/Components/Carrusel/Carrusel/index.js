import React from 'react';
import Slider from '../Slider';
import VideoCard from '../VideoCard';

const Carrusel = ({ videos, borderColor }) => {

console.log(borderColor, "Desde Carrusel")
  return (
    <Slider borderColor={borderColor} >
      {videos.map((video, index) => (
        <VideoCard key={index} videoUrl={video.url} titulo={video.titulo} borderColor={borderColor}/>
      ))}
    </Slider>
  );
};

export default Carrusel;
