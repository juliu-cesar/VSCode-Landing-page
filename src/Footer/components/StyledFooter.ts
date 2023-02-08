import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #222222;
  width: 100%;
  min-width: 280px;
  height: 56px;
  padding: 3px;
  margin-top: 25px;
  overflow: hidden;
  .frame_footer {
    width: 100%;
    max-width: 880px;
    height: 56px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: ${({ theme }) => theme.text_color};
      :hover {
        color: ${({ theme }) => theme.primary_color};
      }
    }
    .github_link {
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        margin-right: 3px;
      }
    }
    .created_by {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 3px;
      font-size: 15px;
      .text_copy {
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
    img {
      width: 15px;
    }
  }
  @media (max-width: 350px) {
    .frame_footer{
      a:first-child{
        width: 60px;
      }
      .created_by {
        width: 130px;
        gap: 3px;
        font-size: 13px;
        .text_copy {
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      } 
    }
  }
  @media (min-width: 450px) {
    height: 60px;
    a{
      font-size: 19px;
    }
  }
`;
