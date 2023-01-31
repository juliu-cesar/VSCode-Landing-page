import styled from "styled-components";

export const StyledMain = styled.main`
text-align: right;
padding-right: 16px;
h1{
  font-size: 27px;
  margin-top: 25px;
}
p{
  font-size: 14px;
  margin-bottom: -8px;
}
div{
  position: relative;
  z-index: 5;
  width: 100vw;
  height: 150px;
  .btn_downloadPrincipal{
    position: absolute;
    background: linear-gradient(90deg, rgba(0,210,78,0.6091430322128851) 0%, rgba(0,152,255,1) 70%, rgba(0,152,255,1) 100%);
    color: ${({theme})=> theme.text_color};
    right: 16px;
    top: 30px;
    border: unset;
    width: 198px;
    height: 45px;
    border-radius: 2px;
    :hover, :focus{
      background-color: rgb(0,152,255);      
    }
  }
  .btn_webVersion{
    position: absolute;
    background-color: unset;
    color: ${({theme})=> theme.text_color};
    right: 16px;
    top: 90px;
    padding: 10px;
    border: 2px solid ${({theme})=> theme.text_color};
    border-radius: 3px;
    :hover{
      background-color: ${({theme})=> theme.text_color};
      color: ${({theme})=> theme.background_base};
    }
  }
}
img{
  position: absolute;
  z-index: -1;
  width: 180px;
  top: 70px;
  left: 16px;  
}
`