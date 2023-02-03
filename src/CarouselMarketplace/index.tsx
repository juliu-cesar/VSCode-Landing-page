import CardMarketplace from "./components/CardMarketplace";
import { StyledCrMarket } from "./components/StyledCrMarket";


export default function CarouselMarketplace(){

  return(
    <StyledCrMarket>
      <div className="frame_crMarket">
        <div id="carouselMarket">
          <CardMarketplace 
          src="python-icon"
          title="Python"
          identifier="ms-python"
          downloads={75.3}
          />
          <CardMarketplace 
          src="python-icon"
          title="Python"
          identifier="ms-python"
          downloads={75.3}
          />
          <CardMarketplace 
          src="python-icon"
          title="Python"
          identifier="ms-python"
          downloads={75.3}
          />
        </div>
      </div>
    
    </StyledCrMarket>
  )
}