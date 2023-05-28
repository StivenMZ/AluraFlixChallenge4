import React from "react";
import styled from "styled-components";
import Logo from '../../Images/Logo.png'

const Pie = styled.footer`
border-top: 3px solid #2A7AE4;
height: 82px;
background: rgba(0, 0, 0, 0.9);
display: flex;
justify-content: center;

`;

const Img = styled.img`
width: 252.5px;
height: 60px;

`;

const Footer = () => {

    return(
        <Pie>
            <Img src={Logo}></Img>
        </Pie>
    )

}

export default Footer