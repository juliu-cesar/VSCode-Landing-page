import styled from "styled-components";

export const StyledCard = styled.div`
  width: 40vw;
  min-width: 150px;
  max-width: 200px;
  height: 40vw;
  min-height: 150px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.text_color};
  border-radius: 3px;
  .frame_img {
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 45%;
    }
  }
  .text_area {
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    height: 30%;
    padding: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    a {
      color: ${({ theme }) => theme.primary_color};
      max-width: 60%;
      overflow: hidden;
      h4 {
        font-size: 14px;
        line-height: 14px;
      }
      p {
        font-size: 11px;
        font-weight: 300;
        line-height: 13px;
      }
      :hover{
        opacity: .7;
      }
    }
    .download_numbers {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 13px;
      img {
        width: 20px;
      }
    }
  }
  @media (min-width: 450px) {
    .text_area {
    padding: 5px;
    div {
      max-width: 65%;
      overflow: hidden;
      h4 {
        font-size: 17px;
        line-height: 14px;
      }
      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 15px;
      }
    }
    .download_numbers {
      font-size: 14px;
    }
  }
  }
`;
