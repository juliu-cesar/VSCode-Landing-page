import styled from "styled-components";

export const StyledDivCrHome = styled.div`
  background-color: ${({ theme }) => theme.semi_black};
  position: relative;
  width: 100%;
  max-height: 550px;
  padding-top: 15px;
  padding-bottom: 20px;
  margin-top: 20px;
  .ButtonsCrHome {
    width: 100%;
    max-width: 880px;
    height: 30px;
    padding: 5px;
    margin: auto;
    margin-bottom: 35px;
    display: flex;
    justify-content: space-around;
    button {
      position: relative;
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      padding: 5px;
      border: unset;
      span {
        z-index: 10;
        position: absolute;
        background-color: ${({ theme }) => theme.background_2};
        width: 12px;
        height: 12px;
        top: 30px;
        left: calc(50% - 6px);
        border-radius: 50%;
        transition: all 0.7s;
      }
    }
    .activeBtn {
      span {
        background-color: ${({ theme }) => theme.second_color};
      }
    }
    ::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.background_2};
      width: 100%;
      height: 2px;
      top: 55px;
      left: 0px;
    }
  }
  .frame_carousel {
    position: relative;
    width: 100%;
    max-width: 880px;
    height: 50vw;
    max-height: 440px;
    margin: auto;
    overflow: hidden;
    #CarouselHome {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      transition: all 0.7s cubic-bezier(0.7, 0.275, 0.565, 1);
      transform: translateX(-920px);
      .card_carousel {
        background-color: ${({ theme }) => theme.background_2};
        width: 101vw;
        height: 100%;
        max-height: 440px;
        display: flex;
        align-items: center;
        justify-content: center;
        .frame_imgCr {
          width: 101vw;
          height: 100%;
          overflow: hidden;
          #Intellisense {
            height: 100%;
          }
          #Snippet {
            height: 100%;
          }
          #Debug {
            width: 100vw;
            object-fit: fill;
            object-position: center -25px;
          }
        }
      }
    }
  }
  @media (min-width: 600px) {
    .frame_carousel #CarouselHome .card_carousel .frame_imgCr #Debug {
      object-position: center -40px;
    }    
  }
  @media (min-width: 900px) {
    .frame_carousel #CarouselHome .card_carousel .frame_imgCr #Debug {
      object-position: center -60px;
    }    
  }
`;
