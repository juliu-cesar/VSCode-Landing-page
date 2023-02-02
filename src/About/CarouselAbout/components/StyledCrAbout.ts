import styled from "styled-components";

export const StyledCrAbout = styled.div`
  width: 100%;
  padding: 16px;
  .container {
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    padding: 10px;
    text-align: center;
    box-shadow: 2px 2px 4px #222;
    border-radius: 2px;
    .frame_crAbout {
      position: relative;
      width: 308;
      height: 250px;
      overflow: hidden;
      border-radius: 2px;
      .carousel_about {
        display: flex;
        flex-direction: row;
        gap: 10px;
        .card_crAbout {
          width: 100%;
          .frame_img_crAbout {
            width: 100%;
            height: 24%;
            margin-bottom: 10px;
            overflow: hidden;
            border-radius: 2px;
            img {
              height: 100%;
            }
          }
          .frame_text_crAbout {
            text-align: center;
            h3 {
              width: 100%;
              font-size: 17px;
            }
            p {
              font-size: 13px;
              font-weight: 3000;
              line-height: 15px;
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
        margin: 0 3px;
      }
      .active{
        background-color: ${({ theme }) => theme.second_color};
      }
    }
  }
`;
