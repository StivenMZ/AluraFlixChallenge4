import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    font-size: 16px;
    width: 100%;
    max-width: 100%;
  }
 body{
    max-width: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: rgba(0, 0, 0, 0.9);
 }
 
 @media screen and (max-width: 4001px) {
  html{
    font-size: 32px;
  }
 }


 @media screen and (max-width: 3000px) {
  html{
    font-size: 26px;
  }
 }


 @media screen and (max-width: 2500px) {
  html{
    font-size: 22px;
  }
 }


 @media screen and (max-width: 2100px) {
  html{
    font-size: 20px;
  }
 }


 @media screen and (max-width: 1840px) {
  html{
    font-size: 18px;
  }
 }


 @media screen and (max-width: 1640px) {
  html{
    font-size: 17px;
  }
 }


 @media screen and (max-width: 1440px) {
  html{
    font-size: 16px;
  }
 }

 @media screen and (max-width: 1265px) {
  html{
    font-size: 15px;
  }
 }

 @media screen and (max-width: 1182px) {
  html{
    font-size: 13px;
  }
 }


 @media screen and (max-width: 1182px) {
  html{
    font-size: 12px;
  }
 }

 @media screen and (max-width: 963px) {
  html{
    font-size: 11px;
  }
 }

 @media screen and (max-width: 894px) {
  html{
    font-size: 10px;
  }
 }

 @media screen and (max-width: 807px) {
  html{
    font-size: 9px;
  }
 }

 @media screen and (max-width: 730px) {
  html{
    font-size: 8px;
  }
 }



 @media screen and (max-width: 620px) {
  html{
    font-size: 7px;
  }
 }


 @media screen and (max-width: 420px) {
  html{
    font-size: 6px;
  }
 }


 @media screen and (max-width: 320px) {
  html{
    font-size: 5px;
  }
 }

`;

export default Global;
