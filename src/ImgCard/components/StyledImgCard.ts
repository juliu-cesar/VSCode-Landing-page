import styled from "styled-components";


export const StyledImgCard = styled.div`
  width: 100%;
  padding: 10px 16px;
  img{
    width: 100%;
    border: 3px solid ${({theme})=> theme.background_2};
    border-radius: 1px;
  }
`