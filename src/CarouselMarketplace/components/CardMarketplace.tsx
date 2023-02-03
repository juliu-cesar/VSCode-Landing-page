interface Props {
  src: string;
  title: string;
  identifier: string;
  downloads: number;
}

export default function CardMarketplace({
  src,
  title,
  identifier,
  downloads,
}: Props) {
  return (
    <>
      <div className="card_crMarket">
        <div className="frame_img">
          <img
            src={`img/Carousel_marketplace/${src}.png`}
            alt="Ícone da extensão"
          />
        </div>
        <div className="text_area">
          <h4>{title}</h4>
          <p>{identifier}</p>
          <p className="download_numbers">
            <img
              src="img/Carousel_marketplace/download-icon.svg"
              alt="ícone de download"
              />
              {downloads}M
          </p>
        </div>
      </div>
    </>
  );
}
