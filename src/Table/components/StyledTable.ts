import styled from "styled-components";

export const StyledTable = styled.div<{
  thMinMiWidth: number;
  tdMinWidth: number;
  td2MinWidth?: number;
}>`
  max-width: 880px;
  padding: 16px;
  margin: auto;
  display: flex;
  justify-content: center;
  .frame_table{
    border: 2px solid ${({ theme }) => theme.background_2};
    border-radius: 2px;
    overflow-x: auto;
  }
  table {
    width: max-content;
    border-collapse: collapse;
    font-size: 13px;
    font-weight: 300;
    line-height: 17px;
  }
  thead {
    th {
      padding: 10px 5px;
      font-size: 19px;
    }
  }
  tbody {
    tr:nth-child(2n + 1) {
      background-color: ${({ theme }) => theme.black};
    }
    tr:nth-child(2n + 2) {
      background-color: ${({ theme }) => theme.semi_black};
    }
    th,
    td {
      padding: 4px;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
    }
    th {
      width: ${({ thMinMiWidth }) => `${thMinMiWidth}px`};
    }
    td:nth-child(2) {
      width: ${({ tdMinWidth }) => `${tdMinWidth}px`};
    }
    td:nth-child(3) {
      width: ${({ td2MinWidth }) => `${td2MinWidth}px`};
    }
  }
  .emphasis {
    font-weight: 700;
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
  @media (max-width: 350px) {
    padding: unset;
  }
  @media (min-width: 450px) {
    tbody {
      th,
      td {
        padding: 5px;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
      }
      th {
        width: unset;
        min-width: ${({ thMinMiWidth }) => `${thMinMiWidth}px`};
        max-width: ${({ thMinMiWidth }) => `${thMinMiWidth * 1.2}px`};
      }
      td:nth-child(2) {
        width: unset;
        min-width: ${({ tdMinWidth }) => `${tdMinWidth}px`};
        max-width: ${({ tdMinWidth }) => `${tdMinWidth * 1.2}px`};
      }
      td:nth-child(3) {
        width: unset;
        min-width: ${({ td2MinWidth }) => `${td2MinWidth}px`};
        max-width: ${({ td2MinWidth }) => `${td2MinWidth! * 1.2}px`};
      }
    }
  }
  @media (min-width: 700px) {
    tbody {
      tr:nth-child(2n + 1) {
        background-color: ${({ theme }) => theme.black};
      }
      tr:nth-child(2n + 2) {
        background-color: ${({ theme }) => theme.semi_black};
      }
      th,
      td {
        padding: 7px;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
      }
      th {
        min-width: ${({ thMinMiWidth }) => `${thMinMiWidth}px`};
        max-width: ${({ thMinMiWidth }) => `${thMinMiWidth * 1.3}px`};
      }
      td:nth-child(2) {
        min-width: ${({ tdMinWidth }) => `${tdMinWidth}px`};
        max-width: ${({ tdMinWidth }) => `${tdMinWidth * 1.5}px`};
      }
      td:nth-child(3) {
        min-width: ${({ td2MinWidth }) => `${td2MinWidth}px`};
        max-width: ${({ td2MinWidth }) => `${td2MinWidth! * 1.5}px`};
      }
    }
  }
`;
