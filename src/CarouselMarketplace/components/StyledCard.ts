import styled from "styled-components";

export const StyledCard = styled.div`
  .card_crMarket {
    width: 150px;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.text_color};
    border-radius: 3px;
    .frame_img {
      width: 146px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 45%;
      }
    }
    .text_area {
      background-color: ${({ theme }) => theme.background_2};
      height: 46px;
      padding: 5px;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      grid-template-areas: "title title";
      h4 {
        grid-area: title;
        font-size: 15px;
        line-height: 17px;
      }
      p {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
      }
      .download_numbers {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 20px;
          float: left;
        }
      }
    }
  }
`;
