import BlueBox from "./BlueBox";
import Box from "./Box";
import Luckybiky from "./Luckybiky";
import Test from "./Test";

function App() {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  };

  return (
    <div style={style}>
      {Array(1000)
        .fill()
        .map(() => {
          return <BlueBox></BlueBox>;
        })}
    </div>
  );
}

export default App;
