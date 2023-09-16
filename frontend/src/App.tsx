import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Pane } from "tweakpane";
import { useSharedCounter } from "@/providers/App";
import { Button } from "./components/Elements/Button";

function App() {
  const [title, setTitle] = useState("hello");
  const [count, dispatch] = useSharedCounter();

  const PARAMS = {
    factor: 123,
    title: title,
    color: "#ff0055",
  };

  const pane = new Pane();

  pane.addBinding(PARAMS, "factor");
  pane.addBinding(PARAMS, "title").on("change", (ev) => {
    setTitle(ev.value);
  });
  pane.addBinding(PARAMS, "color");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{title}</p>
      <Button onClick={() => dispatch("increment")}>Count is {count}</Button>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
