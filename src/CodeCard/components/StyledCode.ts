import styled from "styled-components";

export const StyledCode = styled.div`
width: 100%;
max-width: 880px;
padding: 16px;
margin: auto;
.frame_code{
  background-color: #202020;
  width: 100%;
  padding: 2px;
  border: 2px solid ${({theme})=> theme.gray};
  border-radius: 2px;
}
`