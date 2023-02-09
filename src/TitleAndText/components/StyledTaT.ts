import styled from "styled-components";

export const StyledTaT = styled.div`
  width: 100%;
  max-width: 880px;
  margin: auto;
  font-weight: 300;
  h1 {
    padding: 10px 30px;
    font-size: 25px;
    line-height: 27px;
  }
  h2 {
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    font-size: 20px;
    margin: 10px 0;
    padding: 10px 16px;
    line-height: 23px;
  }
  p {
    width: 90%;
    padding: 5px;
    margin: auto;
    margin-bottom: 5px;
    line-height: 17px;
    font-size: 14px;
    font-weight: 300;
  }
  .list {
    width: 100%;
    line-height: 17px;
    font-size: 14px;
    font-weight: 300;
    ul {
      width: 100%;
      padding-left: 50px;
      li {
        list-style: disc;
        margin-bottom: 5px;
      }
    }
  }
  .emphasis {
    font-weight: 500;
  }
  .color_principal {
    color: ${({ theme }) => theme.primary_color};
  }
  .code1 {
    color: ${({ theme }) => theme.code_1};
  }
  .code2 {
    color: ${({ theme }) => theme.code_2};
  }
  .comment {
    color: ${({ theme }) => theme.primary_color_2};
  }
  .code_number {
    color: #00ee9f;
    font-weight: 500;
  }
  .codeSnippet_1 {
    background-color: ${({ theme }) => theme.bg_code_1};
    color: ${({ theme }) => theme.code_1};
    padding: 0 5px;
    font-size: 13px;
    border-radius: 3px;
  }
  .codeSnippet_2 {
    background-color: ${({ theme }) => theme.bg_code_2};
    color: ${({ theme }) => theme.code_2};
    padding: 0 5px;
    font-size: 13px;
    border-radius: 3px;
  }
  .small {
    font-size: 12px;
    padding: 0 3px;
    line-height: 15px;
  }
  .underline {
    text-decoration: underline;
  }
  a{
    color: ${({ theme }) => theme.primary_color};
    :hover{
      opacity: .8;
    }
  }
  #annotation {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 0;
    p {
      width: 80%;
      padding: 5px 10px;
      margin: unset;
      font-size: 13px;
      font-weight: 300;
      line-height: 15px;
      border-left: 5px solid ${({ theme }) => theme.gray};
    }
  }
  @media (min-width: 450px) {
    h1 {
      font-size: 27px;
      line-height: 32px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 22px;
      line-height: 24px;
    }
    p {
      font-size: 17px;
      line-height: 19px;
    }
    .list {
      font-size: 15px;
      line-height: 19px;
    }
    .codeSnippet_1 {
      font-size: 14px;
    }
    .codeSnippet_2 {
      font-size: 14px;
    }
    #annotation p {
      font-size: 15px;
      line-height: 17px;
    }
  }
`;
