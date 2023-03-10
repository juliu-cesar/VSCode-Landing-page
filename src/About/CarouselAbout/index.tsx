import Link from "next/link";
import { useEffect, useState } from "react";
import { StyledCrAbout } from "./components/StyledCrAbout";

export default function CarouselAbout() {
  const [startInterval, setStartInterval] = useState(false);
  let elementIndex: number = 0;
  let interval: NodeJS.Timer | undefined;

  useEffect(() => {
    if (interval) return;
    const buttons = document.querySelectorAll(".ButtonsCrAbout button");

    interval = setInterval(() => {
      const allButtons = document.querySelectorAll(
        ".ButtonsCrAbout button"
      ) as NodeListOf<HTMLElement>;

      allButtons.forEach((el, index) => {
        if (el.classList[0] == "activeBtn") {
          elementIndex = index;
        }
      });

      elementIndex += 1;
      if (elementIndex == buttons.length) {
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
    const carousel_img = document.querySelector("#CarouselAbout_img") as HTMLElement;
    const carousel_text = document.querySelector("#CarouselAbout_text") as HTMLElement;
    const allButtons = document.querySelectorAll(
      ".ButtonsCrAbout button"
    ) as NodeListOf<HTMLElement>;

    allButtons.forEach((el, index) => {
      if (index == i) {
        el.classList.add("activeBtn");
      } else {
        el.classList.remove("activeBtn");
      }
    });
    carousel_img.style.transform = `translateX(${
      i * -carousel_img.children[i].clientWidth
    }px)`;
    carousel_text.style.transform = `translateX(${
      i * -carousel_text.children[i].clientWidth
    }px)`;
    // carousel.style.transform = `translateX(-200px)`;
  }

  function selectCard(target: HTMLElement): void {
    const allButtons = document.querySelectorAll(
      ".ButtonsCrAbout button"
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
    <StyledCrAbout>
      <div className="container_about">
        <div className="frame_crAbout">
          <div id="CarouselAbout_img">
            <div className="frame_img_crAbout">
              <img
                src="img/About/intelligent-code-about.png"
                alt="linha de c??digo sendo digitada e o IntelliSense aberto mostrando poss??veis conclus??es de c??digos."
              />
            </div>

            <div className="frame_img_crAbout">
              <img
                src="img/About/debug-about.png"
                alt="Aba de depurar aberta com os principais comandos durante a depura????o, como Pr??ximo comando, Entrar na fun????o, entre outros."
              />
            </div>

            <div className="frame_img_crAbout">
              <img
                src="img/About/fast-editing-about.png"
                alt="Editando linhas de c??digo com m??ltiplos cursores."
              />
            </div>

            <div className="frame_img_crAbout">
              <img
                src="img/About/peek-about.png"
                alt="Trecho de c??digo de outro arquivo aberto no arquivo atual, logo abaixo do c??digo onde foi utilizado o comando 'Ir para referencia' com a tecla de atalho ( Shift+F12 )"
              />
            </div>
          </div>
          <div id="CarouselAbout_text">
            <div className="frame_text_crAbout">
              <h3>Conclus??o de c??digo inteligente</h3>
              <p>
                Codifique de forma mais inteligente com o{" "}
                <Link href="/intellisense">IntelliSense</Link> - conclus??es para vari??veis, m??todos
                e m??dulos importados.
              </p>
            </div>
            <div className="frame_text_crAbout">
              <h3>Depura????o simplificada</h3>
              <p>
                A depura????o de impress??o ficou no passado. <Link href="/debug">Depure</Link>{" "}
                no VS Code com suas ferramentas de terminal.
              </p>
            </div>
            <div className="frame_text_crAbout">
              <h3>Edi????o r??pida e poderosa</h3>
              <p>
                Linting , edi????o com v??rios cursores, dicas de par??metros e
                outros recursos de edi????o poderosos
              </p>
            </div>
            <div className="frame_text_crAbout">
              <h3>Navega????o de c??digo e refatora????o</h3>
              <p>
                Navegue pelo seu c??digo-fonte rapidamente usando peek e{" "}
                <Link href="/code-navigation">navegue at?? a defini????o</Link>.
              </p>
            </div>
          </div>
        </div>
        <div className="ButtonsCrAbout">
          <button
            className="activeBtn"
            onClick={(e) => {
              selectCard(e.target as HTMLElement);
            }}
          ></button>
          <button
            onClick={(e) => {
              selectCard(e.target as HTMLElement);
            }}
          ></button>
          <button
            onClick={(e) => {
              selectCard(e.target as HTMLElement);
            }}
          ></button>
          <button
            onClick={(e) => {
              selectCard(e.target as HTMLElement);
            }}
          ></button>
        </div>
      </div>
    </StyledCrAbout>
  );
}
