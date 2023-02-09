import { StyledImgCard } from "./components/StyledImgCard";

interface Props {
  children: React.ReactNode
  maxLength?: number
}

export default function ImgCard({ children, maxLength }: Props) {
  return (
    <StyledImgCard maxLength={maxLength}>
      {children}
    </StyledImgCard>
  );
}
