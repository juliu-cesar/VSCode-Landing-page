import styled from "styled-components";

export const StyledHeader = styled.header`
position: relative;
  width: 100vw;
  height: 50px;
  display: block;
  nav {
    width: 100%;
    height: 100%;
    ul {
      height: 100%;
      padding-right: 15px;
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      span {
        position: relative;
        button{
          cursor: pointer;
        }
      }
      button {
        background-color: unset;
        width: 100%;
        border: unset;
      }
      li {
        color: ${({ theme }) => theme.text_color};
        width: 100%;
        list-style: none;
        padding: 13px;
        opacity: 0.8;
        font-size: 1rem;
        transition: all 0.3s;
        :hover {
          opacity: 1;
          color: ${({ theme }) => theme.second_color};
        }
      }
      .btn_homePage {
        position: absolute;
        width: 35px;
        left: 13px;
        top: 8px;
      }
      .resources_menu {
        display: flex;
        align-items: center;
        img {
          width: 20px;
        }
      }
      #CoverDisplay {
        z-index: 10;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
      }
    }
  }
  @media (max-width: 350px) {
    nav ul {
      min-width: 280px;
      height: 100%;
      li {
        font-size: 0.9rem;
        padding: 5px;
      }
    }
  }
  @media (min-width: 450px) {
    nav ul {
      min-width: 280px;
      height: 100%;
      li {
        font-size: 1.2rem;
        padding: 10px;
      }
      .btn_homePage {
        position: absolute;
        width: 40px;
        left: 30px;
        top: 8px;
      }
    }
  }
  @media (min-width: 900px) {
    max-width: 900px;
    margin: auto;
    margin-bottom: 15px;
    height: 55px;
    nav ul {
      min-width: 280px;
      height: 100%;
      padding: 0;
      li {
        height: 55px;
        padding: 13px;
      }
      .btn_homePage {
        position: absolute;
        width: 50px;
        left: 50px;
        top: 8px;
      }
    }
  }
`;
