import styled from "styled-components";

export const StyledAnnotation = styled.div`
display: flex;
justify-content: end;
padding: 0 16px;
p{
  width: 80%;
  padding-left: 6px;
  font-size: 12px;
  font-weight: 300;
  line-height: 13px;
  border-left: 5px solid ${({theme})=> theme.gray};
}
`