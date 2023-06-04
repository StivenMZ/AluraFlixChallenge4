import React from 'react';
import styled from 'styled-components';
import BannerImg from '../../Images/BannerImg.png'
import BannerContent from './BannerContent';


const Banner = ({color}) =>{

    const BannerSection = styled.section`
    background-image: url(${BannerImg});
    height: 832px;

    `;


    return(
        <BannerSection>
            <BannerContent color={color} />
        </BannerSection>
    )
}
export default Banner