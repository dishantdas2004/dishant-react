import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 shadow-lg text-black rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 shadow-lg text-black rounded-full" style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 shadow-lg text-black rounded-full" style={{backgroundColor: "white"}}>White</button>
        </div>
      </div>
    </div>
  );
}

// in react we can write inline css in {{}} format. Here backgroundColor is a css Property written in react syntax

export default App;
