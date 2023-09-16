import { useState } from "react";
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
      <h1>Vite + React</h1>
      <p>{title}</p>
      <Button onClick={() => dispatch("increment")}>Count is {count}</Button>
    </>
  );
}

export default App;
