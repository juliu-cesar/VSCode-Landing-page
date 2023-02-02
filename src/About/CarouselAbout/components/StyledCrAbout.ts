import styled from "styled-components";

export const StyledCrAbout = styled.div`
  width: 100%;
  padding: 16px;
  .container {
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    padding: 10px;
    text-align: center;
    box-shadow: 2px 2px 4px #252525;
    border-radius: 2px;
    .frame_crAbout {
      position: relative;
      width: 308;
      height: 250px;
      padding-left: 4px;
      overflow: hidden;
      border-radius: 2px;
      #CarouselAbout {
        display: flex;
        flex-direction: row;
        gap: 15px;
        transition: all .7s ease-in-out;
        .card_crAbout {
          width: 100%;
          height: 250px;
          .frame_img_crAbout {
            width: 300px;
            max-height: 160px;
            margin-bottom: 10px;
            overflow: hidden;
            border-radius: 2px;
            img {
              width: 100%;
              margin: auto;
            }
          }
          .frame_text_crAbout {
            text-align: center;
            h3 {
              width: 100%;
              font-size: 17px;
            }
            p {
              width: 95%;
              font-size: 13px;
              font-weight: 3000;
              line-height: 15px;
              margin: auto;
              a {
                color: ${({ theme }) => theme.primary_color};
              }
            }
          }
        }
      }
    }
    .ButtonsCrAbout{
      button{
        background-color: unset;
        width: 15px;
        height: 15px;
        border: 2px solid ${({ theme }) => theme.second_color};
        border-radius: 50%;
        margin: 0 4px;
      }
      .activeBtn{
        background-color: ${({ theme }) => theme.second_color};
      }
    }
  }
`;
