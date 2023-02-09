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
            title="Python"
            downloads={75.3}
            identifier="ms-python"
            src="python-icon"
            link="https://marketplace.visualstudio.com/items?itemName=ms-python.python"
          />
          <CardMarketplace
            title="C/C++"
            downloads={41.9}
            identifier="ms-vscode"
            src="c-icon"
            link="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"
          />
          <CardMarketplace
            title="C#"
            downloads={19.7}
            identifier="ms-dotnettools"
            src="C-sharp-icon"
            link="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"
          />
          <CardMarketplace
            title="Debugger for Java"
            downloads={17.2}
            identifier="ms-vscode"
            src="debugger-java-icon"
            link="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug"
          />
          <CardMarketplace
            title="Go"
            downloads={8.7}
            identifier="golang.Go"
            src="Go-icon"
            link="https://marketplace.visualstudio.com/items?itemName=golang.Go"
          />
          <CardMarketplace
            title="PHP Debug"
            downloads={8.4}
            identifier="xdebug.php"
            src="php-icon"
            link="https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug"
          />
          <CardMarketplace
            title="Live Server"
            downloads={30.7}
            identifier="ritwickdey"
            src="Live-Server-icon"
            link="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          />
          <CardMarketplace
            title="Prettier"
            downloads={28.9}
            identifier="esbenp"
            src="prettier-icon"
            link="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          />
          <CardMarketplace
            title="IntelliCode"
            downloads={26.2}
            identifier="VisualStudioExptTeam"
            src="IntelliCode-icon"
            link="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"
          />
          <CardMarketplace
            title="ESLint"
            downloads={24.9}
            identifier="dbaeumer"
            src="ESLint-icon"
            link="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
          />
          <CardMarketplace
            title="Docker"
            downloads={21.2}
            identifier="ms-azuretools"
            src="docker-icon"
            link="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"
          />
        </div>
      </div>
    </StyledCrMarket>
  );
}
