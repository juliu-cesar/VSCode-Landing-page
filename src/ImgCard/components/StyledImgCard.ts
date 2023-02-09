import styled from "styled-components";

export const StyledImgCard = styled.div<{
  maxLength?: number;
}>`
  width: 100%;
  max-width: 880px;
  max-width: ${({ maxLength }) => `${maxLength}px`};
  padding: 10px 16px;
  margin: auto;
  img {
    width: 100%;
    border: 3px solid ${({ theme }) => theme.background_2};
    border-radius: 1px;
  }
`;
