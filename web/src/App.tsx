import { useState } from "react";
import "./App.css";
import { Pane } from "tweakpane";
import { useSharedCounter } from "@/providers/App";
import { Button } from "./components/Elements/Button";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

import { GreetService } from "./gen/greet/v1/greet_connect";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

const client = createPromiseClient(GreetService, transport);

function App() {
  const [title, setTitle] = useState("world");
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

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await client.greet({ name: title });
          alert(res.greeting);
        }}
      >
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}

export default App;
