import styled from "styled-components";

export const StyledTable = styled.div<{
  thWidth: number;
  tdWidth: number;
  tdWidth_2?: number;
}>`
  width: 100%;
  padding: 10px 16px;
  .frame_table {
    width: 100%;
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
        font-weight: 400;
        padding: 4px;
      }
      th {
        width: ${(props) => `${props.thWidth}px`};
      }
      td:nth-child(2) {
        width: ${(props) => `${props.tdWidth}px`};
      }
      td:nth-child(3) {
        width: ${(props) => `${props.tdWidth_2}px`};
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
  }
`;
