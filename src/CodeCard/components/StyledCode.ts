import styled from "styled-components";

export const StyledCode = styled.div`
width: 100%;
padding: 16px;
.frame_code{
  background-color: #202020;
  width: 100%;
  padding: 2px;
  border: 2px solid ${({theme})=> theme.gray};
  border-radius: 2px;
}
`