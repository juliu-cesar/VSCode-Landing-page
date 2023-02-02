import styled from "styled-components";


export const StyledTaT = styled.div`
h1{
  width: 100%;
  padding: 10px 30px;
  font-size: 25px;
  line-height: 27px;
}
h2{
  background-color: ${({theme})=> theme.background_2};
  font-size: 20px;
  margin: 10px 16px;
  margin-top: 25px;
  padding: 10px 16px;
  line-height: 23px;
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