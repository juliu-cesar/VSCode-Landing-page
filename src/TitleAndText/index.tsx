import { StyledTaT } from "./components/StyledTaT";

interface Props{
  children: React.ReactNode
}

export default function TitleAndText({children}: Props){

  return(
    <StyledTaT>
      {children}
    </StyledTaT>
  )
}