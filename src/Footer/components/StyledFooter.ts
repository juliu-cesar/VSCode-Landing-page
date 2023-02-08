import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #222222;
  width: 100%;
  height: 56px;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .github_link{
    display: flex;
    align-items: center;
    img{
      border-radius: 50%;
      margin-right: 3px;
    }
  }
  .windows_copy{
    display: flex;
    align-items: center;
    gap: 3px;
  }
  a {
    color: ${({ theme }) => theme.text_color};
    :hover{
      color: ${({ theme }) => theme.primary_color}
    }
  }
  img {
    width: 15px;
  }
  .text_small_2 {
    font-size: 10px;
  }
`;
