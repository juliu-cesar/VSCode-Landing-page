import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  text-align: right;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-size: 29px;
    margin-top: 25px;
  }
  p {
    font-size: 17px;
    line-height: 20px;
  }
  .buttons_banner {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 150px;
    .btn_downloadPrincipal {
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(0, 210, 78, 0.6091430322128851) 0%,
        rgba(0, 152, 255, 1) 70%,
        rgba(0, 152, 255, 1) 100%
      );
      color: ${({ theme }) => theme.text_color};
      width: 198px;
      height: 45px;
      right: 0px;
      top: 30px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      border: unset;
      border-radius: 2px;
      :hover,
      :focus {
        background-color: rgb(0, 152, 255);
      }
    }
    .btn_webVersion {
      position: absolute;
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      width: 150px;
      height: 45px;
      right: 0px;
      top: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${({ theme }) => theme.text_color};
      border-radius: 3px;
      :hover,
      :focus {
        background-color: ${({ theme }) => theme.text_color};
        color: ${({ theme }) => theme.background_base};
      }
    }
  }
  img {
    position: absolute;
    z-index: -1;
    width: 180px;
    top: 70px;
    left: 16px;
  }
  @media (max-width: 350px) {
    padding-right: 10px;
    h1 {
      font-size: 25px;
      margin-top: 20px;
    }
    p {
      font-size: 13px;
      font-weight: 500;
      line-height: 22px;
    }
  }
  @media (min-width: 450px) {
    height: 65vw;
    max-height: 380px;
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
    }
    .buttons_banner {
      font-size: 17px;
      .btn_downloadPrincipal {
        width: 250px;
        height: 50px;
        top: 20px;
      }
      .btn_webVersion {
        width: 200px;
        height: 45px;
        top: 85px;
      }
    }
    img {
      position: absolute;
      z-index: -1;
      width: 45%;
      max-width: 300px;
      top: 70px;
      left: 25px;
    }
  }
  @media (min-width: 900px) {
    max-width: 880px;
    height: 45vw;
    max-height: 430px;
    padding-right: 0;
    margin: auto;
    h1 {
      font-size: 40px;
    }
    .buttons_banner {
      height: 200px;
      font-size: 20px;
      .btn_downloadPrincipal {
        width: 300px;
        height: 55px;
        right: 0px;
        top: 30px;
      }
      .btn_webVersion {
        width: 230px;
        height: 50px;
        top: 100px;
        right: 0px;
      }
    }
    img {
      position: absolute;
      z-index: -1;
      width: 35vw;
      max-width: 350px;
      top: 70px;
      left: 25px;
    }
  }
`;
