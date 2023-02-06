import { StyledImgCard } from "./components/StyledImgCard";

interface Props {
  Src: string;
  Alt: string;
}

export default function ImgCard({ Src, Alt }: Props) {
  return (
    <StyledImgCard>
      <img src={`img/Debug/${Src}.png`} alt={Alt} />
    </StyledImgCard>
  );
}
