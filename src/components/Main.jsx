import CardDetails from "./CardDetails";
import Carousel from "./Carousel";

const Main = () => {
  return (
    <div>
      <div className="sliderDiv">
        <Carousel />
      </div>
      <div className="cardsDiv">
        <CardDetails />
      </div>
    </div>
  );
};

export default Main;
