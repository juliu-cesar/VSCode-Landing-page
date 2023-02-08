import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
		background-color: ${({theme})=> theme.background_base};
		color: ${({theme})=> theme.text_color};
    font-family: 'Mukta', sans-serif;
    overflow-x: hidden;
  }
  .subtitle{
    font-size: 17px;
  }
  .text_main{
    font-size: 15px;
    font-weight: 400;
  }
  .text_general{
    font-size: 14px;
    font-weight: 300;
  }
  .text_small{
    font-size: 11px;
    font-weight: 300;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  /* NextJS */
  html {
    /* display: block; */
    /* flex-direction: column; */
    /* min-height: 100%; */
  }
  body {
    /* display: flex; */
    /* flex: 1; */
  }
  #__next {
    /* display: flex; */
    /* flex: 1; */
		width: 100vw;
    min-width: 280px;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .25s;
  }
`;