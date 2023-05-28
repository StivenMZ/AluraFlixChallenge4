import React from 'react';
import styled from 'styled-components';
import player from '../../Images/player.png'

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 43%;
`;

const Img = styled.img`
width: 646px;
height: 333.58px;
position: relative;
right: 2%;
`;

const FrontTitle = styled.div`
    display: flex;
    width: 296px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 70px;
    background: #6BD1FF;
    border-radius: 4px;
    text-align: center;
    justify-content: center;
    padding: 10px 0px;
    margin-bottom: 12%;

`;

const ContentSub = styled.h1`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 46px;
line-height: 54px;

color: #F5F5F5;

`;

const PhContent = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
width: 661px;
color: #F5F5F5;
`;

const SubContent = styled.div`
position: relative;
left: 2%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 14px;
`;

const PContent = "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."

const BannerContent = () => {

    return (
        <Content>
            <SubContent>
                <FrontTitle>Front End</FrontTitle>
                <ContentSub>Challenge React</ContentSub>
                <PhContent>{PContent}</PhContent>
            </SubContent>
            <Img src={player}></Img>
        </Content>
    )
}




export default BannerContent
