import styled from "styled-components";

export const StyledReasons = styled.div`
width: 100%;
.title_reasons{
  background-color: ${({theme})=> theme.background_2};
  width: 100%;
  padding: 5px 16px;
  margin-top: 25px;
}
.card_reasons{
  padding: 15px 16px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: ${({theme})=> theme.third_color};
  transition: border .5s;
  .card_title{
    width: 50%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bg_img{
      background-color: ${({theme})=> theme.background_2};
      width: 40px;
      height: 40px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      img{
        width: 95%;
      }
    }
  }
  p{
    line-height: 15px;
  }
  :hover{
    border-color: ${({theme})=> theme.primary_color};
  }
}
`