import React, { useEffect, useState } from "react";
import { TodoData } from "../../../shared/models/todo-data";
import { getTodos, createTodo, deleteTodo } from "../api/todos";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      setTodos(await getTodos());
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "1em",
          marginBottom: "1em",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (input) {
            await createTodo({ text: input });
          }
          setInput("");
          setTodos(await getTodos());
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="text">Enter Todo</label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            name="text"
            type="text"
          />
        </div>
        <input type="submit" />
      </form>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            width: "100%",
            display: "flex",
            gap: "1em",
            justifyContent: "space-between",
          }}
        >
          <span>{todo.text}</span>
          <button
            onClick={async () => {
              await deleteTodo(todo.id);
              setTodos(await getTodos());
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
