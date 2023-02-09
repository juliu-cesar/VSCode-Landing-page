import { useEffect } from "react";
import CardMarketplace from "./components/CardMarketplace";
import { StyledCrMarket } from "./components/StyledCrMarket";

export default function CarouselMarketplace() {
  useEffect(() => {
    const Container = document.querySelector(".frame_crMarket") as HTMLElement;
    const Carousel = document.querySelector("#carouselMarket") as HTMLElement;

    let isDown: boolean = false;
    let startX: number;

    function startWithTouch(e: TouchEvent) {
      isDown = true;
      startX = e.touches[0].pageX - Carousel.offsetLeft;
    }
    function moveWithTouch(e: TouchEvent) {
      moveCr(e.touches[0].pageX);
    }
    function startWithCursor(e: MouseEvent) {
      isDown = true;
      startX = e.pageX - Carousel.offsetLeft;
    }
    function moveWithCursor(e: MouseEvent) {
      if (!isDown) return;
      e.preventDefault();
      moveCr(e.pageX);
    }
    function moveCr(positionX: number) {
      const delta: number = positionX - startX;

      Carousel.style.left = `${delta}px`;
      checkLimit();
    }
    function leave() {
      isDown = false;
    }
    const checkLimit = () => {
      let outer: DOMRect = Container.getBoundingClientRect();
      let inner: DOMRect = Carousel.getBoundingClientRect();

      if (parseInt(Carousel.style.left) > 0) {
        Carousel.style.left = "0px";
      }
      if (inner.right < outer.right) {
        Carousel.style.left = `-${inner.width - outer.width}px`;
      }
    };

    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
    if (isMobile()) {
      Container.addEventListener("touchstart", startWithTouch);
      Container.addEventListener("touchmove", moveWithTouch);
      Container.addEventListener("touchend", leave);
    } else {
      Container.addEventListener("mousedown", startWithCursor);
      Container.addEventListener("mousemove", (e) => {
        moveWithCursor(e);
      });
      Container.addEventListener("mouseleave", leave);
      Container.addEventListener("mouseup", leave);
    }
  }, []);

  return (
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
            src="c-icon"
            title="C/C++"
            identifier="ms-vscode"
            downloads={41.9}
          />
          <CardMarketplace
            src="C-sharp-icon"
            title="C#"
            identifier="ms-dotnettools"
            downloads={19.7}
          />
          <CardMarketplace
            src="debugger-java-icon"
            title="Debugger for Java"
            identifier="ms-vscode"
            downloads={17.2}
          />
          <CardMarketplace
            src="Go-icon"
            title="Go"
            identifier="golang.Go"
            downloads={8.7}
          />
          <CardMarketplace
            src="php-icon"
            title="PHP Debug"
            identifier="xdebug.php"
            downloads={8.4}
          />
          <CardMarketplace
            src="Live-Server-icon"
            title="Live Server"
            identifier="ritwickdey"
            downloads={30.7}
          />
          <CardMarketplace
            src="prettier-icon"
            title="Prettier"
            identifier="esbenp"
            downloads={28.9}
          />
          <CardMarketplace
            src="IntelliCode-icon"
            title="IntelliCode"
            identifier="VisualStudioExptTeam"
            downloads={26.2}
          />
          <CardMarketplace
            src="ESLint-icon"
            title="ESLint"
            identifier="dbaeumer"
            downloads={24.9}
          />
          <CardMarketplace
            src="docker-icon"
            title="Docker"
            identifier="ms-azuretools"
            downloads={21.2}
          />
        </div>
      </div>
    </StyledCrMarket>
  );
}
