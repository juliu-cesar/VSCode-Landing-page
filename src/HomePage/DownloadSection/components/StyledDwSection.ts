import styled from "styled-components";

export const StyledDwSection = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 0 16px;
  margin: auto;
  margin-top: 25px;
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
    background: linear-gradient(90deg, rgba(0,152,255,0.40662202380952384) 0%, rgba(0,152,255,1) 60%, rgba(0,152,255,1) 100%);
    color: ${({theme})=> theme.text_color};
    width: 100%;
    height: 36px;
    margin: 10px 0;
    border: unset;
    border-radius: 2px;
    font-weight: 700;
    transition: all .5s ease-in-out;
    :hover{
      background-color: ${({theme})=> theme.primary_color};
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
      font-size: 14px;
      font-weight: 300;
      line-height: 14px;
    }
    img{
      margin-left: 7px;
    }
  }
  @media (max-width: 350px) {
    .btn_DwSection{
      height: 50px;
    }
    .btn_WebVSection{
      height: 50px;
    }
    .DwDescription{
      padding: 5px;
      p{
        font-size: 14px;
      }
    }
    .WebDescription{
      padding: 5px;
      p{
        font-size: 13px;
        line-height: 14px;
    }
    } 
  }
  @media (min-width: 450px) {
    .btn_DwSection{
      height: 40px;
      font-size: 17px;
    }
    .btn_WebVSection{
      height: 40px;
      font-size: 15px;
    }
    .WebDescription p{
      font-size: 16px;
      line-height: 16px;
  }
  }
  @media (min-width: 900px) {
    h3{
      font-size: 20px;
      padding: 15px;
    }
    .btn_DwSection{
      height: 50px;
      font-size: 19px;
    }
    .btn_WebVSection{
      height: 50px;
      font-size: 17px;
    }
    .DwDescription{
      padding: 16px;
      p{
        font-size: 17px;
      }
    }
    .WebDescription{
      padding: 16px;
      p{
        font-size: 16px;
        line-height: 17px;
    }
    } 
  }
`