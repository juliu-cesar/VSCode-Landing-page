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
    border: 2px solid ${({ theme }) => theme.gray};
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
        background-color: ${({ theme }) => theme.background_2};
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
    .emphasis{
      font-weight: 700;
    }
  }
`;
