import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 50px;
  display: block;
 nav{
  width: 100%;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;    
    li{
      list-style: none;
      padding: 13px;
    }
    .btn_homePage{
      position: absolute;
      width: 35px;
      left: 13px;
      top: 7px;
    }
    .resources_menu{
      display: flex;
      align-items: center;
      img{
        width: 20px;
      }   
    }
  }
 } 
`