import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name: "xyz",
    age: 20
  }

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card channel="Dishant Das" btn="Click Me"/>
      <Card channel="Max Aaron"/>

    </>
  );
}

export default App;
