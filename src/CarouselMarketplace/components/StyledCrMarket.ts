import styled from "styled-components";


export const StyledCrMarket = styled.div`
width: 100%;
margin: 20px 0;
.frame_crMarket{
  position: relative;
  width: 95%;
  height: 150px;
  margin: auto;
  overflow: hidden;
  #carouselMarket{
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    gap: 15px;    
  }
}
`