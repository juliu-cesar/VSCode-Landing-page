import { StyledCode } from "./components/StyledCode";

interface Props{
  children: React.ReactNode
}

export default function CodeCard({children}: Props) {
  return ( 
    <StyledCode>
      <div className="frame_code">
        {children}
      </div>
    </StyledCode>
   );
}