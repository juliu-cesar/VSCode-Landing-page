import styled from "styled-components";

export const StyledDropdown = styled.div`
  z-index: 50;
  position: absolute;
  width: 150px;
  top: 40px;
  right: 10px;
  border-radius: 2px;
  a {
    color: ${({ theme }) => theme.text_color};
  }
  div {
    background-color: ${({ theme }) => theme.background_2};
    padding: 3px 15px;
    border-bottom: 1px solid #28282850;
    opacity: 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (min-width: 450px) {
    width: 200px;
    top: 50px;
    right: 15px;
    div {
      padding: 5px 20px;
      font-size: 17px;
    }
  }
  @media (min-width: 900px) {
    width: 220px;
    top: 55px;
    right: 20px;
    div {
      padding: 7px 25px;
      font-size: 17px;
    }
  }
`;
