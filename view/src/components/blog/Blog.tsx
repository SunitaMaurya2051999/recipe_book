import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Slider1 from "./slides/Slider1";
import Slider2 from "./slides/Slider2";
import Slider3 from "./slides/Slider3";
import Slider4 from "./slides/Slider4";
import Slider5 from "./slides/Slider5";

export default function Blog() {
  return (
    <>
      <AwesomeSlider bullets={false} fillParent={true} animation="cubeAnimation">
        <div style={{ background: "#120709" }}>
          <Slider1 />
        </div>
        <div>
          <Slider2 />
        </div>
        <div>
          <Slider3 />
        </div>
        <div>
          <Slider4 />
        </div>
        <div>
          <Slider5 />
        </div>
      </AwesomeSlider>
    </>
  );
}
