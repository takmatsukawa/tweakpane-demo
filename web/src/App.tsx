import { useEffect, useState } from "react";
import "./App.css";
import { Pane } from "tweakpane";
import { useSharedCounter } from "@/providers/app";
import { Button } from "./components/ui/button";
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

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    let ignore = false;

    async function start() {
      for await (const res of client.greetServerStream({ name: title })) {
        if (ignore) {
          break;
        }
        console.log(res);
      }
    }

    start();

    return () => {
      ignore = true;
    };
  }, []);

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
