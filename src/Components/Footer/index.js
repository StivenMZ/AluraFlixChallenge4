import React from "react";
import styled from "styled-components";
import Logo from '../../Images/Logo.png'

const Pie = styled.footer`
border-top: 0.1875rem solid #2A7AE4;
background: rgba(0, 0, 0, 0.9);
display: flex;
justify-content: center;

`;

const Img = styled.img`
width: 17.6%;
height: 3.75rem;
margin: 2% 0%;

`;

const Footer = () => {

    return(
        <Pie>
            <Img src={Logo}></Img>
        </Pie>
    )

}

export default Footer