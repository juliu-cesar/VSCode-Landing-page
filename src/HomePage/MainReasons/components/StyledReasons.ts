import styled from "styled-components";

export const StyledReasons = styled.div`
  width: 100%;
  min-width: 280px;
  /* margin: auto; */
  .title_reasons {
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    padding: 5px 16px;
    margin-top: 25px;
  }
  .frame_reasons {
    display: flex;
    flex-direction: column;
    .card_reasons {
      padding: 16px 16px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 2px solid;
      border-bottom: 2px solid;
      border-color: ${({ theme }) => theme.second_color};
      transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      .card_title {
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg_img {
          background-color: ${({ theme }) => theme.background_2};
          width: 40px;
          height: 40px;
          padding: 5px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          img {
            width: 95%;
          }
        }
      }
      :hover {
        border-color: ${({ theme }) => theme.primary_color};
      }
    }
    
  }
  @media (max-width: 350px) {
    .title_reasons {
      width: 100%;
      padding: 5px 0;
      margin-top: 25px;
      text-align: center;
      font-size: 15px;
    }
  }
  @media (min-width: 450px) {
    .title_reasons {
      width: 100%;
      padding: 7px 32px;
      margin-top: 25px;
      font-size: 19px;
    }
    .card_reasons{
      .card_title {
        margin-bottom: 20px;
        font-size: 19px;
      }
      p{
        max-width: 600px;
      }
    }
  }
  @media (min-width: 900px) {
    max-width: 880px;
    margin: auto;
    .title_reasons {
      width: 100%;
      padding: 7px 32px;
      margin: 35px 0;
      font-size: 19px;
      h2 {
        max-width: 800px;
        margin: auto;
      }
    }
    .frame_reasons {
      width: 880px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      .card_reasons {
        padding: 16px 30px;
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.second_color};
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        .card_title {
          width: 100%;
          margin-bottom: 20px;
          font-size: 19px;
          display: flex;
          justify-content: center;
          align-items: center;
          .bg_img {
            background-color: ${({ theme }) => theme.background_2};
            width: 40px;
            height: 40px;
            padding: 5px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
          }
        }
        :hover {
        border-color: ${({ theme }) => theme.second_color};
        transform: scale(1.1);
      }
      }
    }
  }
`;
