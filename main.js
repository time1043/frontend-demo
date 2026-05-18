/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function App() {
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");
  const [circleSize, setCircleSize] = React.useState(150);
  const [circleRotate, setCircleRotate] = React.useState(0);

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
      <label>
        Purple
        <input
          type="checkbox"
          checked={isPurple}
          onChange={() => setIsPurple((isPurple) => !isPurple)}
          // onChange={(e) => setIsPurple(e.target.checked)}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        >
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(e) => setCircleSize(Number(e.target.value))}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={circleRotate}
          onChange={(e) => setCircleRotate(Number(e.target.value))}
        />
      </label>

      <div className={circleClass} style={circleStyle}>
        Hi!
      </div>
    </main>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
