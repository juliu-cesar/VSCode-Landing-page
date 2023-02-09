import styled from "styled-components";

export const StyledCrMarket = styled.div`
width: 100%;
max-width: 880px;
margin: auto;
margin-top: 10px;
margin-bottom: 15px;
.frame_crMarket{
  position: relative;
  width: 95%;
  height: 40vw;
  min-height: 150px;
  max-height: 200px;
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