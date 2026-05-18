import { useState } from "react";
import CircleProperty from "./components/CircleProperty";
import TextColor from "./components/TextColor";
import TogglePurple from "./components/TogglePurple";

export default function App() {
  const [isPurple, setIsPurple] = useState(false);
  const [textColor, setTextColor] = useState("");
  const [circleSize, setCircleSize] = useState(150);
  const [circleRotate, setCircleRotate] = useState(0);

  const circleClass = `circle ${isPurple ? "purple" : ""} ${textColor}`;

  const circleStyle = {
    height: `${circleSize}px`,
    width: `${circleSize}px`,
    lineHeight: `${circleSize}px`,
    transform: `rotate(${circleRotate}deg)`,
    fontSize: `${circleSize / 4}px`, // for the text
  };

  return (
    <main>
      <TogglePurple {...{ isPurple, setIsPurple }} />
      <TextColor {...{ textColor, setTextColor }} />
      <CircleProperty property={circleSize} setProperty={setCircleSize}>
        Circle Size
      </CircleProperty>
      <CircleProperty property={circleRotate} setProperty={setCircleRotate}>
        Circle Rotate
      </CircleProperty>

      <div className={circleClass} style={circleStyle}>
        Hi!
      </div>
    </main>
  );
}
