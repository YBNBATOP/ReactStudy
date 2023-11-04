import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]); //this one is used by both components, so we lifted it up to the actual Todo component

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
