import styled from "styled-components";


export const StyledImgCard = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 10px 16px;
  margin: auto;
  img{
    width: 100%;
    border: 3px solid ${({theme})=> theme.background_2};
    border-radius: 1px;
  }
`