import React from 'react';
import styled from 'styled-components';
import BannerImg from '../../Images/BannerImg.png'
import BannerContent from './BannerContent';


const Banner = ({color}) =>{

    const BannerSection = styled.section`
    background-image: url(${BannerImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 52rem;
    @media screen and (max-width: 767px) {
    height: auto;
}
    
  `;


    return(
        <BannerSection>
            <BannerContent color={color} />
        </BannerSection>
    )
}
export default Banner