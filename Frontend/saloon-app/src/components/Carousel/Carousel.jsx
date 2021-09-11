import "./Carousel.css";

export default function Carousel({ itemContainer, items, CarouselComponent }) {
  const sideScroll = (direction, container) => {
    var scrollAmount = 0;
    var element = container.current;
    var speed = 2;
    var distance = 620;
    var step = 10;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="carousel">
      <button
        className="scroll-buttons"
        id="slideBack"
        type="button"
        onClick={(e) => sideScroll("left", itemContainer)}
      >
        &#60;
      </button>
      <div ref={itemContainer} className="featured-items">
        {items.map((card) => (
          <CarouselComponent hit={card} />
        ))}
      </div>
      <button
        className="scroll-buttons"
        id="slideBack"
        type="button"
        onClick={(e) => sideScroll("right", itemContainer)}
      >
        &#62;
      </button>
    </div>
  );
}
