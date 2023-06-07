import React from 'react';
import Slider from '../Slider';
import VideoCard from '../VideoCard';
import styled from 'styled-components';

const Title = styled.div`
    height: 2.875rem;
    color: white;
    border-radius: 0.1875rem;
    background: ${props => props.background};
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5625rem;
    display: inline-block;
    padding: 0.5rem;

    @media screen and (max-width: 767px){
      font-size: 3.1rem;
      height: 3.5rem;
      padding: 1.2rem;
      border-radius: 0.8rem;
    }
`;

const DivTitle = styled.div`
display: flex;
margin: 3% 2%;
align-items: center;
gap: 1%;

@media screen and (max-width: 767px){
      flex-direction: column;
      align-items: flex-start;
      margin: 3% 5%;
    }

`

const DescTitle = styled.p`
color: #F5F5F5;
font-weight: 300;
font-size: 1.125rem;
@media screen and (max-width: 767px){
   font-size: 2.1rem;
   margin-top: 1%;

    }


`

const DivTarjetas = styled.div`
height: 16.303rem;
width: 90%;

@media screen and (max-width: 767px) {
  height: 34.452rem;
  width: 100%;
  
}

`


const Carrusel = ({ videos, borderColor, title, descripcion }) => {
  return (
    <>
      {title &&  
      <DivTitle>
      <Title background={borderColor}>{title}</Title>
      <DescTitle>{descripcion}</DescTitle>
      </DivTitle>
      }
      <Slider borderColor={borderColor}>
        {videos.map((video, index) => (
          <DivTarjetas>
          <VideoCard key={index} src={video.urlImagen} videoUrl={video.urlVideo} titulo={video.titulo} borderColor={borderColor}  />
          </DivTarjetas>
        ))}
      </Slider>
    </>
  );
};

export default Carrusel;
