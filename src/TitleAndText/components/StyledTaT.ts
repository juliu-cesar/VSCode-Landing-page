import styled from "styled-components";

export const StyledTaT = styled.div`
  font-weight: 300;
  h1 {
    width: 100%;
    padding: 10px 30px;
    font-size: 25px;
    line-height: 27px;
  }
  h2 {
    background-color: ${({ theme }) => theme.background_2};
    font-size: 20px;
    margin: 10px 16px;
    padding: 10px 16px;
    line-height: 23px;
  }
  p {
    width: 100%;
    padding: 0 30px;
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
  .comment{
    color: ${({ theme }) => theme.primary_color_2};
  }
  .code_number{
    color: #00Ee9f;
    font-weight: 500;
  }
  .codeSnippet_1 {
    background-color: ${({ theme }) => theme.bg_code_1};
    color: ${({ theme }) => theme.code_1};
    padding: 0 5px;
    border-radius: 3px;
    font-size: 14px;
  }
  .codeSnippet_2 {
    background-color: ${({ theme }) => theme.bg_code_2};
    color: ${({ theme }) => theme.code_2};
    padding: 0 5px;
    border-radius: 3px;
    font-size: 14px;
  }
  .small {
    font-size: 12px;
    padding: 0 3px;
    line-height: 15px;
  }
  .underline {
    text-decoration: underline;
  }
  #annotation {
    display: flex;
    justify-content: end;
    padding: 5px 16px;
    p {
      width: 80%;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 300;
      line-height: 13px;
      border-left: 5px solid ${({ theme }) => theme.gray};
    }
  }
`;
