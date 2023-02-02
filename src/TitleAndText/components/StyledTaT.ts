import styled from "styled-components";


export const StyledTaT = styled.div`
h1{
  width: 100%;
  padding: 16px 30px;
  font-size: 27px;
}
h2{
  background-color: ${({theme})=> theme.background_2};
  margin: 10px 16px;
  padding: 3px 16px;

}
p{
  width: 100%;
  line-height: 17px;
  font-size: 14px;
  padding: 0 30px;
  font-weight: 300;
}
.emphasis{
  font-weight: 500;
}
`