import { StyledDivCrHome } from "./components/StyledCrHome";

export default function CarouselHome() {
  return (
    <StyledDivCrHome>
      <div className="Buttons">
        <button id="btn_Int">IntelliSense</button>
        <button id="btn_Sni">Snippets</button>
        <button id="btn_Deb">Debugging</button>
      </div>
      <div className="crHome">
        <div id="IntelliSense" className="FrameCarousel">
          <div className="IntelliSense" >
            <img
              src="img/IntelliSense/intellisense-principal-gif.gif"
              alt="Gif apresentando o recurso de conclusão de código."
            />
          </div>
        </div>
        <div id="Snippet" className="FrameCarousel">
          <div className="Snippet">
            <img
              src="img/Snippet/snippet-principal-gif.gif"
              alt="Gif apresentando o recurso de conclusão de código."
            />
          </div>
        </div>
        <div id="Debug" className="FrameCarousel">
          <div className="Debug">
            <img
              src="img/Debug/debug-principal.png"
              alt="Gif apresentando o recurso de conclusão de código."
            />
          </div>
        </div>
      </div>
    </StyledDivCrHome>
  );
}
