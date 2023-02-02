import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 50px;
  display: block;
  nav {
    width: 100%;
    height: 50px;
    ul {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      button {
        background-color: unset;
        border: unset;
      }
      li {
        list-style: none;
        padding: 13px;
        color: ${({ theme }) => theme.text_color};
        opacity: 0.7;
        transition: opacity 0.3s;
        :hover {
          opacity: 1;
        }
      }
      .btn_homePage {
        position: absolute;
        width: 35px;
        left: 13px;
        top: 8px;
      }
      span {
        position: relative;
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
`;
