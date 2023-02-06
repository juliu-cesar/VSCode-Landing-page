import styled from "styled-components";


export const StyledTaT = styled.div`
font-weight: 300;
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
  padding: 10px 16px;
  line-height: 23px;
}
p{
  width: 100%;
  padding: 0 30px;
  margin-bottom: 5px;
  line-height: 17px;
  font-size: 14px;
  font-weight: 300;
}
.emphasis{
  font-weight: 500;
}
.color_principal{
  color: ${({theme})=> theme.primary_color};
}
.code1{
  color: ${({theme})=> theme.code_1};
}
.code2{
  color: ${({theme})=> theme.code_2};
}
.codeSnippet_1{
  background-color: ${({theme})=> theme.bg_code_1};
  color: ${({theme})=> theme.code_1};
  padding: 0 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
}
.codeSnippet_2{
  background-color: ${({theme})=> theme.bg_code_2};
  color: ${({theme})=> theme.code_2};
  padding: 0 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
}
.underline{
  text-decoration: underline;
}
.indent{
  margin-left: 5px;
}
`