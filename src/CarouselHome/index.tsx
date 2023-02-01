import { useEffect } from "react";
import { StyledDivCrHome } from "./components/StyledCrHome";

export default function CarouselHome() {
  let inicialX: number = 0;
  let selectIndex: number = 1;
  let interval: NodeJS.Timer;

  useEffect(() => {
    if (interval) return;
    const carousel = document.querySelector("#Carousel") as HTMLElement;
    const allButtons = document.querySelectorAll(
      ".Buttons button"
      ) as NodeListOf<HTMLElement>;
      
      allButtons[selectIndex - 1].style.borderColor = "#007ACC";
      (allButtons[selectIndex -1].children[0] as HTMLElement).style.opacity = "1";
    interval = setInterval(() => {
      inicialX = +inicialX - 300;
      
      console.log("children elemento 1: ", allButtons[0].children[0]);

      if (inicialX < -700) {
        inicialX = 0;
        selectIndex = 0;
      }

      if (selectIndex == 0) {
        allButtons[selectIndex + 1].style.borderColor = "#004D80";
        allButtons[selectIndex + 2].style.borderColor = "#004D80";
        (allButtons[selectIndex+1].children[0] as HTMLElement).style.opacity = "0";
        (allButtons[selectIndex+2].children[0] as HTMLElement).style.opacity = "0";
      }
      if (selectIndex == 1) {
        allButtons[selectIndex - 1].style.borderColor = "#004D80";
        allButtons[selectIndex + 1].style.borderColor = "#004D80";
        (allButtons[selectIndex-1].children[0] as HTMLElement).style.opacity = "0";
        (allButtons[selectIndex+1].children[0] as HTMLElement).style.opacity = "0";
      }
      if (selectIndex == 2) {
        allButtons[selectIndex - 1].style.borderColor = "#004D80";
        allButtons[selectIndex - 2].style.borderColor = "#004D80";
        (allButtons[selectIndex-1].children[0] as HTMLElement).style.opacity = "0";
        (allButtons[selectIndex-2].children[0] as HTMLElement).style.opacity = "0";
      }

      allButtons[selectIndex].style.borderColor = "#007ACC";
      (allButtons[selectIndex].children[0] as HTMLElement).style.opacity = "1";
      carousel.style.transform = `translateX(${inicialX}px)`;
      selectIndex++;
    }, 6000);
  }, []);

  return (
    <StyledDivCrHome>
      <div className="Buttons">
        <button id="btn_Int">
          IntelliSense<span id="Intellisense_border"></span>
        </button>
        <button id="btn_Sni">
          Snippets<span id="Snippet_border"></span>
        </button>
        <button id="btn_Deb">
          Debugging<span id="Debug_border"></span>
        </button>
      </div>
      <div className="frame_carousel">
        <div id="Carousel">
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Intellisense"
                src="img/IntelliSense/intellisense-principal-gif.gif"
                alt="Gif apresentando o recurso de conclusão de código."
              />
            </div>
          </div>
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Snippet"
                src="img/Snippet/snippet-principal-gif.gif"
                alt="Gif apresentando o recurso de conclusão de código."
              />
            </div>
          </div>
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Debug"
                src="img/Debug/debug-principal.png"
                alt="Gif apresentando o recurso de conclusão de código."
              />
            </div>
          </div>
        </div>
      </div>
    </StyledDivCrHome>
  );
}
