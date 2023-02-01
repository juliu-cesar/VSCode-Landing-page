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
      border: 2px solid ${({ theme }) => theme.second_color};
      border-radius: 50%;
    }
    #btn_Int::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 28px;
      left: calc(50% - 1px);
      bottom: -28px;
      margin: 0px;
      background-color: ${({ theme }) => theme.second_color};
      display: block;
    }
  }
  .crHome {
    position: relative;
    width: 100%;
    height: 210px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.second_color};
    overflow: hidden;
    .FrameCarousel {
      background-color: ${({ theme }) => theme.background_2};
      width: 300px;
      height: 190px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .IntelliSense {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 2px;
        img {
          width: 180%;
          border-radius: 2px;
        }
      }
      .Snippet {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 2px;
        img {
          width: 145%;
          border-radius: 2px;
        }
      }
      .Debug {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 2px;
        img {
          width: 100px;
          border-radius: 2px;
        }
      }
    }
    #IntelliSense {
      position: absolute;
      left: 10px;
      top: calc(210px / 2 - 47%);
    }
    #Snippet {
      position: absolute;
      left: 320px;
      top: calc(210px / 2 - 47%);
    }
    #Debug {
      left: 630px;
      position: absolute;
      top: calc(210px / 2 - 47%);
    }
  }
`;
