import { useEffect } from "react";
import CardMarketplace from "./components/CardMarketplace";
import { StyledCrMarket } from "./components/StyledCrMarket";

export default function CarouselMarketplace() {
  
  useEffect(() => {
  const Container = document.querySelector(".frame_crMarket") as HTMLElement;
  const Carousel = document.querySelector("#carouselMarket") as HTMLElement;

  let isDown = false;
  let startX: number;

  function startWithTouch(e: TouchEvent) {
    isDown = true;
    startX = e.touches[0].pageX - Carousel.offsetLeft;
  }
  function startWithCursor(e: MouseEvent) {
    isDown = true;
    startX = e.offsetX - Carousel.offsetLeft;
  }

  function moveWithTouch(e: TouchEvent) {
    moveCr(e.touches[0].pageX);
  }
  function moveWithCursor(e: MouseEvent) {
    if (!isDown) return;
    e.preventDefault();
    moveCr(e.offsetX);
  }
  function moveCr(positionX: number) {
    const delta = positionX - startX;
    Carousel.style.left = `${delta}px`;
    checkLimit();
  }
  function leave() {
    isDown = false;
  }

  const checkLimit = () => {
    let outer = Container.getBoundingClientRect();
    let inner = Carousel.getBoundingClientRect();

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
    Container.addEventListener("mousemove", moveWithCursor);
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
          <CardMarketplace
            src="python-icon"
            title="Python"
            identifier="ms-python"
            downloads={75.3}
          />
        </div>
      </div>
    </StyledCrMarket>
  );
}
