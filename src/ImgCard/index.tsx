import { StyledImgCard } from "./components/StyledImgCard";

interface Props {
  children: React.ReactNode
}

export default function ImgCard({ children }: Props) {
  return (
    <StyledImgCard>
      {children}
    </StyledImgCard>
  );
}
