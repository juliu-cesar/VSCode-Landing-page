import styled from "styled-components";

export const StyledDwSection = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  h3{
    background-color: ${({theme})=> theme.background_2};
    width: 100%;
    padding: 10px;
    line-height: 20px;
    border-radius: 1px;
  }
  .btn_DwSection{
    background-color: ${({theme})=> theme.primary_color};
    color: ${({theme})=> theme.text_color};
    width: 100%;
    height: 36px;
    margin: 10px 0;
    border: unset;
    border-radius: 2px;
    font-weight: 700;
    :hover{
      box-shadow: 0px 0px 5px ${({theme})=> theme.primary_color};
    }
  }
  .DwDescription{
    background-color: ${({theme})=> theme.background_2};
    width: 100%;
    padding: 7px;
    border-radius: 1px;
    p{
      margin: 5px 0;
      display: flex;
      align-items: center;
    }
    img{
      margin-right: 7px;
    }
  }
  .btn_WebVSection{
    background-color: unset;
    color: ${({theme})=> theme.text_color};
    width: 100%;
    height: 36px;
    margin: 10px 0;
    border: 2px solid ${({theme})=> theme.text_color};
    border-radius: 2px;
    :hover{
      background-color: ${({theme})=> theme.text_color};
      color: ${({theme})=> theme.background_base};      
    }
  }
  .WebDescription{
    background-color: ${({theme})=> theme.background_2};
    width: 100%;
    padding: 7px;
    text-align: right;
    border-radius: 1px;
    p{
      margin: 5px 0;
      display: flex;
      align-items: center;
      line-height: 12px;
    }
    img{
      margin-left: 7px;
    }
  }
`