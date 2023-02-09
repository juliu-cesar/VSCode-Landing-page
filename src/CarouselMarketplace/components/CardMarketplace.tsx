import { StyledCard } from "./StyledCard";

interface Props {
  title: string;
  identifier: string;
  downloads: number;
  src: string;
  link: string
}

export default function CardMarketplace({
  title,
  identifier,
  downloads,
  src,
  link
}: Props) {
  return (
    <StyledCard>
      <div className="frame_img">
        <img
          src={`img/Carousel_marketplace/${src}.png`}
          alt="Ícone da extensão"
        />
      </div>
      <div className="text_area">
        <a href={link} target="_blank">
          <h4>{title}</h4>
          <p>{identifier}</p>
        </a>
        <p className="download_numbers">
          <img
            src="img/Carousel_marketplace/download-icon.svg"
            alt="ícone de download"
          />
          {downloads}M
        </p>
      </div>
    </StyledCard>
  );
}
