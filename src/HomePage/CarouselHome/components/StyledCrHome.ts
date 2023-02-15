import styled from "styled-components";

export const StyledDivCrHome = styled.div`
  background-color: ${({ theme }) => theme.semi_black};
  position: relative;
  width: 100%;
  max-height: 580px;
  padding-top: 5px;
  padding-bottom: 25px;
  margin-top: 20px;
  .ButtonsCrHome {
    width: 100%;
    max-width: 880px;
    height: 55px;
    padding: 5px;
    margin: auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    button {
      position: relative;
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      padding: 5px;
      font-size: 17px;
      font-weight: 500;
      border: unset;
      border-bottom: 2px solid ${({ theme }) => theme.background_2};
      border-radius: 10px;
      transition: all 0.7s ease-in-out;
      span {
        z-index: 10;
        position: absolute;
        background-color: ${({ theme }) => theme.background_2};
        width: 12px;
        height: 12px;
        top: 55px;
        left: calc(50% - 6px);
        font-size: 20px;
        border-radius: 50%;
        transition: all 0.7s ease-in-out;
      }
    }
    .activeBtn {
      border-color: ${({ theme }) => theme.second_color};
      span {
        background-color: ${({ theme }) => theme.second_color};
        transform: scale(1.3);
      }
    }
    ::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.background_2};
      width: 100%;
      height: 2px;
      top: 70px;
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
      .card_carousel {
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
            max-height: 440px;
          }
          #Snippet {
            height: 100%;
            max-height: 440px;
          }
          #Debug {
            width: 100vw;
            max-width: 880px;
            object-fit: fill;
            object-position: center -25px;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    .ButtonsCrHome {
      margin-bottom: 35px;
      display: flex;
      justify-content: space-between;
      button {
        height: 40px;
        font-size: 15px;
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
