import { useEffect, useState } from "react";
import "./App.css";
import { Pane } from "tweakpane";
import { useSharedCounter } from "@/providers/app";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

import { GreetService } from "@/gen/greet/v1/greet_connect";
import { TodoService } from "@/gen/todo/v1/todo_connect";
import { Todo } from "@/gen/todo/v1/todo_pb";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

const greetClient = createPromiseClient(GreetService, transport);
const todoClient = createPromiseClient(TodoService, transport);

function App() {
  const [title, setTitle] = useState("world");
  const [count, dispatch] = useSharedCounter();
  const [todos, setTodos] = useState<Todo[]>([]);

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
      for await (const res of greetClient.greetServerStream({ name: title })) {
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

  useEffect(() => {
    (async () => {
      const res = await todoClient.todoList({});
      setTodos(res.todos);
    })();
  }, []);

  return (
    <>
      <h1>TODO</h1>
      <section>
        <Table>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell className="w-10 text-center">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{todo.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <form>
          <input type="text" />
          <Button>Add TODO</Button>
        </form>
      </section>

      <p>{title}</p>
      <Button onClick={() => dispatch("increment")}>Count is {count}</Button>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await greetClient.greet({ name: title });
          alert(res.greeting);
        }}
      >
        <Button type="submit">Send Greet</Button>
      </form>
    </>
  );
}

export default App;
