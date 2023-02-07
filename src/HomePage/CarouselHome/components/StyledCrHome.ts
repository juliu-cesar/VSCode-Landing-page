import styled from "styled-components";

export const StyledDivCrHome = styled.div`
background-color: ${({ theme }) => theme.semi_black};
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  margin-top: 20px;
  .ButtonsCrHome {
    width: 100%;
    height: 30px;
    padding: 5px;
    margin-bottom: 35px;
    display: flex;
    justify-content: space-around;
    button {
      position: relative;
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      padding: 5px;
      border: unset;
      span{
        z-index: 10;
        position: absolute;
        background-color: ${({ theme }) => theme.background_2};
        width: 12px;
        height: 12px;
        top: 30px;
        left: calc(50% - 6px);
        border-radius: 50%;
        transition: all .7s;
      }
    }
    .activeBtn{
      span{
        background-color: ${({ theme }) => theme.second_color};
      }
    }
    ::after{
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.background_2};
      width: 100vw;
      height: 2px;
      top: 55px;
      left: 0px;
    }
  }
  .frame_carousel {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    #CarouselHome{
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      transition: all .7s cubic-bezier(0.7, 0.275, 0.565, 1);
      .card_carousel {
        background-color: ${({ theme }) => theme.background_2};
        width: 102%;
        height: 190px;
        display: flex;
        align-items: center;
        justify-content: center;
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
            height: 127%;
            object-position: center -25px;
          }
        }      
      }
    }
  }
`;
