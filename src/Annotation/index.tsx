import { StyledAnnotation } from "./components/StyledAnnotation";

interface Props{
  children: React.ReactNode
}

export default function Annotation({children}: Props){

  return(
    <StyledAnnotation>
      {children}
    </StyledAnnotation>
  )
}