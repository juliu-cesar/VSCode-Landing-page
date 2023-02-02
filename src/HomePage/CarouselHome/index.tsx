import { useEffect, useState } from "react";
import { StyledDivCrHome } from "./components/StyledCrHome";

export default function CarouselHome() {
  const [startInterval, setStartInterval] = useState(false);
  let elementIndex: number = 0;
  let interval: NodeJS.Timer | undefined;

  useEffect(() => {
    if (interval) return;

    interval = setInterval(() => {
      console.log("Start");
      
      const allButtons = document.querySelectorAll(
        ".Buttons button"
      ) as NodeListOf<HTMLElement>;

      allButtons.forEach((el, index) => {
        if (el.classList[0] == "activeBtn") {
          elementIndex = index;
        }
      });
      elementIndex += 1;
      if (elementIndex == 3) {
        elementIndex = 0;
      }
      if (elementIndex == 0) {
        clearPrevAndSelect(0);
      }
      if (elementIndex == 1) {
        clearPrevAndSelect(1);
      }
      if (elementIndex == 2) {
        clearPrevAndSelect(2);
      }
    }, 6000);

    return ()=>{
      clearInterval(interval)
      interval = undefined;
    }
  }, [startInterval]);

  function clearPrevAndSelect(i: number) {
    const carousel = document.querySelector("#Carousel") as HTMLElement;
    const allButtons = document.querySelectorAll(
      ".Buttons button"
    ) as NodeListOf<HTMLElement>;

    allButtons.forEach((el, index) => {
      if (i == index) {
        el.style.borderColor = "#007ACC";
        el.classList.add("activeBtn");
        (el.children[0] as HTMLElement).style.opacity = "1";
      } else {
        el.style.borderColor = "#004D80";
        el.classList.remove("activeBtn");
        (el.children[0] as HTMLElement).style.opacity = "0";
      }
    });
    carousel.style.transform = `translateX(${i * -300}px)`;
  }

  function selectCard(target: HTMLElement): void {
    clearInterval(interval);
    interval = undefined;
    if (target.id == "btn_Int") {
      elementIndex = 0;
      clearPrevAndSelect(0);
    }
    if (target.id == "btn_Sni") {
      elementIndex = 1;
      clearPrevAndSelect(1);
    }
    if (target.id == "btn_Deb") {
      elementIndex = 2;
      clearPrevAndSelect(2);
    }
    setStartInterval(startInterval ? false : true);
  }

  return (
    <StyledDivCrHome>
      <div className="Buttons">
        <button
          id="btn_Int"
          className="activeBtn"
          onClick={(e) => selectCard(e.target as HTMLElement)}
        >
          IntelliSense<span id="Intellisense_border"></span>
        </button>
        <button
          id="btn_Sni"
          onClick={(e) => selectCard(e.target as HTMLElement)}
        >
          Snippets<span id="Snippet_border"></span>
        </button>
        <button
          id="btn_Deb"
          onClick={(e) => selectCard(e.target as HTMLElement)}
        >
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
