import styled from "styled-components";

export const StyledDivCrHome = styled.div`
  position: relative;
  width: 100%;
  .Buttons {
    width: 100%;
    height: 90px;
    padding: 5px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    button {
      position: relative;
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      width: 80px;
      height: 80px;
      border: 2px solid ${({ theme }) => theme.third_color};
      border-radius: 50%;
      transition: all .5s;      
      :hover{
        box-shadow: 0 0 4px ${({ theme }) => theme.second_color};
      }
    }
    #Intellisense_border{
      content: "";
      position: absolute;
      opacity: 0;
      background-color: ${({ theme }) => theme.second_color};
      width: 2px;
      height: 27px;
      top: 77px;
      left: calc(50% - 1px);
      transition: all .4s;
    }
    #Snippet_border{
      content: "";
      position: absolute;
      opacity: 0;
      background-color: ${({ theme }) => theme.second_color};
      width: 2px;
      height: 27px;
      top: 77px;
      left: calc(50% - 1px);      
      transition: all .4s;
    }
    #Debug_border{
      content: "";
      position: absolute;
      opacity: 0;
      background-color: ${({ theme }) => theme.second_color};
      width: 2px;
      height: 27px;
      top: 77px;
      left: calc(50% - 1px);      
      transition: all .4s;
    }
  }
  .frame_carousel {
    position: relative;
    width: 100%;
    height: 210px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.second_color};
    overflow: hidden;
    #Carousel{
      height: 100%;
      padding-left: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      transition: all .7s ease-in-out;
      .card_carousel {
        background-color: ${({ theme }) => theme.background_2};
        width: 300px;
        height: 190px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 4px #222;
        .frame_imgCr{
          width: 100%;
          height: 100%;
          overflow: hidden;
          #Intellisense{
            height: 100%;
          }
          #Snippet{
            height: 100%;
          }
          #Debug{
            height: 100%;
          }
        }      
      }
    }
  }
`;
