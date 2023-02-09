import styled from "styled-components";

export const StyledCrAbout = styled.div`
  width: 100%;
  padding: 16px;
  .container_about {
    position: relative;
    background-color: ${({ theme }) => theme.background_2};
    width: 100%;
    max-width: 880px;
    padding: 10px;
    margin: auto;
    border-radius: 2px;
  }
  .frame_crAbout {
    width: 100%;
    overflow: hidden;
  }
  #CarouselAbout_img {
    width: calc(100% * 4);
    display: flex;
    flex-direction: row;
    transition: all 0.7s ease-in-out;
    .frame_img_crAbout {
      width: calc(100% / 4);
      height: 50vw;
      max-height: 440px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 2px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  #CarouselAbout_text {
    width: calc(100% * 4);
    display: flex;
    flex-direction: row;
    transition: all 0.7s ease-in-out;
    .frame_text_crAbout {
      width: calc(100% / 4);
      padding: 10px;
      margin-bottom: 15px;
      text-align: center;
      h3 {
        font-size: 20px;
        line-height: 25px;
      }
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 15px;
        a {
          color: ${({ theme }) => theme.primary_color};
        }
      }
    }
  }
  .ButtonsCrAbout {
    position: absolute;
    width: 100px;
    bottom: 5px;
    left: calc(50% - 50px);
    text-align: center;
    button {
      background-color: unset;
      width: 15px;
      height: 15px;
      border: 2px solid ${({ theme }) => theme.second_color};
      border-radius: 50%;
      margin: 0 4px;
    }
    .activeBtn {
      background-color: ${({ theme }) => theme.second_color};
    }
  }
  @media (min-width: 450px) {
    #CarouselAbout_img {
      .frame_img_crAbout {
        height: 49vw;
      }
    }
    #CarouselAbout_text {
      .frame_text_crAbout {
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
        h3 {
          font-size: 23px;
          line-height: 27px;
        }
        p {
          font-size: 15px;
          font-weight: 300;
          line-height: 17px;
        }
      }
    }
  }
  @media (min-width: 900px) {
    #CarouselAbout_text {
      .frame_text_crAbout {
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
        h3 {
          font-size: 25px;
          line-height: 30px;
        }
        p {
          font-size: 17px;
          font-weight: 300;
          line-height: 19px;
        }
      }
    }
  }
`;
