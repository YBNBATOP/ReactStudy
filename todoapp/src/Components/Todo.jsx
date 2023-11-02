import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todos}
      {console.log(todos)}
    </div>
  );
}
