import { useEffect, useState } from "react";
import { StyledDivCrHome } from "./components/StyledCrHome";

export default function CarouselHome() {
  const [startInterval, setStartInterval] = useState(false);
  let elementIndex: number = 0;
  let interval: NodeJS.Timer | undefined;

  useEffect(() => {
    if (interval) return;

    interval = setInterval(() => {
      const allButtons = document.querySelectorAll(
        ".ButtonsCrHome button"
      ) as NodeListOf<HTMLElement>;

      allButtons.forEach((el, index) => {
        if (el.classList[0] == "activeBtn") {
          elementIndex = index;
        }
      });
      elementIndex += 1;
      if (elementIndex == allButtons.length) {
        elementIndex = 0;
      }
      clearPrevAndSelect(elementIndex);
    }, 6000);

    return () => {
      clearInterval(interval);
      interval = undefined;
    };
  }, [startInterval]);

  function clearPrevAndSelect(i: number) {
    const carousel = document.querySelector("#CarouselHome") as HTMLElement;
    const allButtons = document.querySelectorAll(
      ".ButtonsCrHome button"
    ) as NodeListOf<HTMLElement>;

    allButtons.forEach((el, index) => {
      if (i == index) {
        el.classList.add("activeBtn");
      } else {
        el.classList.remove("activeBtn");
      }
    });
    carousel.style.transform = `translateX(${i * -300}px)`;
  }

  function selectCard(target: HTMLElement): void {
    const allButtons = document.querySelectorAll(
      ".ButtonsCrHome button"
    ) as NodeListOf<HTMLElement>;

    clearInterval(interval);
    interval = undefined;
    allButtons.forEach((el, index) => {
      if (el == target) {
        elementIndex = index;
        clearPrevAndSelect(index);
      }
    });
    setStartInterval(startInterval ? false : true);
  }

  return (
    <StyledDivCrHome>
      <div className="ButtonsCrHome">
        <button
          id="btn_Int"
          className="activeBtn"
          onClick={(e) => selectCard(e.target as HTMLElement)}
          style={{backgroundColor: "unset"}}
        >
          IntelliSense<span id="Intellisense_border"></span>
        </button>
        <button
          id="btn_Sni"
          onClick={(e) => selectCard(e.target as HTMLElement)}
          style={{backgroundColor: "unset"}}
        >
          Snippets<span id="Snippet_border"></span>
        </button>
        <button
          id="btn_Deb"
          onClick={(e) => selectCard(e.target as HTMLElement)}
          style={{backgroundColor: "unset"}}
        >
          Debugging<span id="Debug_border"></span>
        </button>
      </div>
      <div className="frame_carousel">
        <div id="CarouselHome">
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Intellisense"
                src="img/IntelliSense/intellisense-principal-gif.gif"
                alt="Recurso de conclusão de código através do IntelliSense."
              />
            </div>
          </div>
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Snippet"
                src="img/Snippet/snippet-principal-gif.gif"
                alt="Utilização do Snippet para adicionar grande quantidade de linhas de código pré prontas. "
              />
            </div>
          </div>
          <div className="card_carousel">
            <div className="frame_imgCr">
              <img
                id="Debug"
                src="img/Debug/debug-principal.png"
                alt="Aba de Debug aberta durante uma depuração"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledDivCrHome>
  );
}
